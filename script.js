// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTvKqqiGwtaIbB6oZO2vO-eK9K8Jc7m60",
  authDomain: "hair-que.firebaseapp.com",
  databaseURL: "https://hair-que-default-rtdb.firebaseio.com",
  projectId: "hair-que",
  storageBucket: "hair-que.appspot.com",
  messagingSenderId: "898465075508",
  appId: "1:898465075508:web:04fd9587edfc4282b91561",
  measurementId: "G-KP2TXT0XWM",
};
// Prevent multiple Firebase initializations
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

console.log("✅ Firebase initialized successfully.");

// Get the correct `websiteSource` based on the current page URL
document.addEventListener("DOMContentLoaded", function () {
  const queueForm = document.getElementById("queueForm");

  // Extract the filename from the URL (e.g., "sign3.html" -> "Hairmasters3")
  const urlPath = window.location.pathname.split("/").pop(); // Get filename
  const pageNumber = urlPath.match(/\d+/); // Extract number (e.g., "3" from "sign3.html")
  let websiteSource = pageNumber ? `Hairmasters${pageNumber[0]}` : "Sportscuts"; // Default to Hairmasters3 if no number found

  // Store `websiteSource` in sessionStorage for consistency
  sessionStorage.setItem("websiteSource", websiteSource);
  console.log(`🌍 Queue Source Detected: ${websiteSource}`);

  queueForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!firstName || !lastName) {
      alert("⚠️ First and last names are required.");
      return;
    }

    // Entry object
    const entryData = {
      firstName,
      lastName,
      phoneNumber: phoneNumber || "N/A", // If no phone number, store "N/A"
      email: email || "N/A", // If no email, store "N/A"
      timestamp: new Date().toISOString(),
    };

    // Save to "permanent records"
    const permanentRecordsRef = database.ref(`PermanentRecords/${websiteSource}`);
    permanentRecordsRef.push(entryData)
      .then(() => console.log(`✅ Saved to Permanent Records under ${websiteSource}`))
      .catch((error) => console.error("❌ Error saving to Permanent Records:", error));

    // Save to "queue"
    const queueRef = database.ref(`queues/${websiteSource}`);
    queueRef.push(entryData)
      .then(() => {
        console.log(`✅ Added to queue: ${websiteSource}`);
        queueForm.reset();
      })
      .catch((error) => console.error("❌ Error adding to queue:", error));
  });
});
