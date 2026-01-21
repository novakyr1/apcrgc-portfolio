// Teacher URLs mapping - each teacher has their own unique link
const teacherURLs = {
  "Dr. Md Hasanujjaman": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Koustuv Roy": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Supriya Chatterjee": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Mr. Ikbal Mandal": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Mr. Hirujit Ghosh": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Ms. Nilanjana Nandi": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Nivedita Chatterjee": "  "
};

// Holiday list for 2025 (from the PDF)
const holidays2025 = [
  "01/01/2025", // New Year's Day
  "14/01/2025", // Makar Sankranti
  "23/01/2025", // Birthday of Netaji
  "03/02/2025", // Day after Saraswati Puja
  "14/02/2025", // Birthday of Thakur Panchanan Barma and Shab-e-Barat
  "26/02/2025", // Maha Shivaratri
  "14/03/2025", // Doljatra & Holi
  "15/03/2025", // Day after Doljatra
  "27/03/2025", // Birthday of Shri Shri Harichand Thakur
  "31/03/2025", // Eid-ul-Fitar
  "01/04/2025", // Day after Eid-ul-Fitar
  "10/04/2025", // Mahavir Jayanti
  "14/04/2025", // Birthday of Dr. B.R. Ambedkar
  "15/04/2025", // Bengali New Year's Day
  "18/04/2025", // Good Friday
  "01/05/2025", // May Day
  // Summer Vacation: 05/05/2025 to 27/06/2025 (46 days)
  "27/06/2025", // Rathayatra
  "21/07/2025", // College Foundation Day
  "02/08/2025", // Birthday of Acharya Prafulla Chandra Roy
  "09/08/2025", // Rakhi Bandhan
  "15/08/2025", // Independence Day & Janmashtami
  "05/09/2025", // Fateha-Dwaz-Daham
  "17/09/2025", // Viswakarma Puja
  // Puja Vacation: 22/09/2025 to 05/11/2025 (39 days)
  // Winter Vacation: 25/12/2025 to 31/12/2025 (6 days)
  "31/12/2025"  // Principal's Discretion
];

// Add all summer vacation days
const addSummerVacationDays = () => {
  const startDate = new Date("05/05/2025");
  const endDate = new Date("06/27/2025");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2025.includes(dateString)) {
      holidays2025.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Add all puja vacation days
const addPujaVacationDays = () => {
  const startDate = new Date("09/22/2025");
  const endDate = new Date("11/05/2025");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2025.includes(dateString)) {
      holidays2025.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Add all winter vacation days
const addWinterVacationDays = () => {
  const startDate = new Date("12/25/2025");
  const endDate = new Date("12/31/2025");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2025.includes(dateString)) {
      holidays2025.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Format date as MM/DD/YYYY
const formatDate = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Initialize holiday list with vacation periods
addSummerVacationDays();
addPujaVacationDays();
addWinterVacationDays();

// Check if today is a holiday
const isHoliday = () => {
  const today = new Date();
  
  // *** DEBUGGING: Uncomment to test holiday
  // const todayString = "11/04/2025"; // Test Puja vacation
  // return holidays2025.includes(todayString);
  
  const todayString = formatDate(today);
  return holidays2025.includes(todayString);
};

// Helper: Convert 24hr string (HH:MM) to 12hr format
function to12Hour(time) {
  let [h, m] = time.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;
  h = h ? h : 12;
  return `${h}:${m.toString().padStart(2,"0")} ${ampm}`;
}

// Process subject text to make teacher names clickable
function processSubjectText(text) {
  // Create a copy of the text to work with
  let processedText = text;
  
  // Replace each teacher name with a clickable link
  Object.keys(teacherURLs).forEach(teacher => {
    const regex = new RegExp(teacher, 'g');
    processedText = processedText.replace(
      regex, 
      `<span class="teacher-link" onclick="event.stopPropagation(); window.open('${teacherURLs[teacher]}', '_blank')">${teacher}</span>`
    );
  });
  
  return processedText;
}

// SEM 1 full week routine with teacher names
const routine = {
  "MON": [
    { start: "10:30", end: "11:30", subject: "MAJ2 - Dr. Md Hasanujjaman" },
    { start: "11:30", end: "12:30", subject: "MAJ2 - Dr. Md Hasanujjaman" },
    { start: "12:30", end: "01:30", subject: "VAC - Dr. Nivedita Chatterjee" },
    { start: "02:00", end: "03:00", subject: "VAC - Dr. Nivedita Chatterjee" },
    { start: "03:00", end: "04:00", subject: "SEC - Dr. Md Hasanujjaman" },
    { start: "04:00", end: "05:00", subject: "SEC - Dr. Koustuv Roy" }
  ],
  "TUE": [
    { start: "10:30", end: "11:30", subject: "MIN1 - Dr. Md Hasanujjaman" },
    { start: "11:30", end: "12:30", subject: "MIN1 - Dr. Supriya Chatterjee" },
    { start: "12:30", end: "01:30", subject: "MAJ2 Practical - Mr. Ikbal Mandal" },
    { start: "02:00", end: "03:00", subject: "MAJ2 Practical - Mr. Ikbal Mandal" },
    { start: "03:00", end: "04:00", subject: "MAJ1 Practical - Mr. Ikbal Mandal" },
    { start: "04:00", end: "05:00", subject: "MAJ1 Practical - Mr. Ikbal Mandal & Dr. Md Hasanujjaman" }
  ],
  "WED": [
    { start: "10:30", end: "11:30", subject: "MAJ1 - Mr. Ikbal Mandal" },
    { start: "11:30", end: "12:30", subject: "MAJ1 - Mr. Ikbal Mandal" },
    { start: "12:30", end: "01:30", subject: "MIN1 - Mr. Ikbal Mandal" },
    { start: "01:30", end: "02:00", subject: "Recess Hour" },
    { start: "02:00", end: "03:00", subject: "MAJ2 - Mr. Hirujit Ghosh" },
    { start: "03:00", end: "04:00", subject: "No classes" },
    { start: "04:00", end: "05:00", subject: "MAJ1 - Dr. Koustuv Roy" },
  ],
  "THU": [
    { start: "10:30", end: "11:30", subject: "MIN1 Practical - Mr. Ikbal Mandal & Mr. Hirujit Ghosh" },
    { start: "11:30", end: "12:30", subject: "MIN1 Practical - Mr. Ikbal Mandal & Mr. Hirujit Ghosh" },
    { start: "12:30", end: "01:30", subject: "Recess Hour" },
    { start: "02:00", end: "03:00", subject: "MAJ1 - Dr. Koustuv Roy" },
    { start: "03:00", end: "04:00", subject: "MAJ2 - Dr. Supriya Chatterjee" },
    { start: "04:00", end: "05:00", subject: "MAJ2 - Dr. Supriya Chatterjee" }
  ],
  "FRI": [
    { start: "10:30", end: "11:30", subject: "MAJ1 - Mr. Ikbal Mandal" },
    { start: "11:30", end: "12:30", subject: "MAJ2 - Mr. Hirujit Ghosh" },
    { start: "12:30", end: "01:30", subject: "VAC - Dr. Nivedita Chatterjee" },
    { start: "02:20", end: "03:00", subject: "VAC - Dr. Nivedita Chatterjee" },
    { start: "03:00", end: "04:00", subject: "SEC Practical - Mr. Hirujit Ghosh & Dr. Supriya Chatterjee" },
    { start: "04:00", end: "05:00", subject: "SEC Practical - Mr. Hirujit Ghosh & Dr. Supriya Chatterjee" }
  ],
  "SAT": [
    { start: "10:30", end: "11:30", subject: "Remedial Class - Dr. Md Hasanujjaman" },
    { start: "11:30", end: "12:30", subject: "Remedial Class - Mr. Ikbal Mandal" },
    { start: "12:30", end: "01:30", subject: "Remedial Class - Mr. Hirujit Ghosh" },
    { start: "02:00", end: "03:00", subject: "Tutorial - Ms. Nilanjana Nandi" }
  ]
};

// Global variable to track current day in modal
let currentModalDay = "";

function timeToMinutes(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  document.getElementById("clock").textContent = `${hours}:${minutes} ${ampm}`;
}

function loadCurrentClass() {
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const now = new Date();
  const today = dayNames[now.getDay()];
  document.getElementById("dayTitle").textContent = today;

  const routineBox = document.getElementById("routineBox");
  
  // Check if today is a holiday
  if (isHoliday()) {
    routineBox.classList.add("holiday");
    document.getElementById("currentClass").innerHTML = `<div class="holiday-class">🎉 Holiday - No Classes Today</div>`;
    return;
  } else {
    routineBox.classList.remove("holiday");
  }

  const todayRoutine = routine[today];
  const container = document.getElementById("currentClass");
  container.innerHTML = "";

  if (!todayRoutine) {
    container.innerHTML = `<div class="no-class">✅ No Classes Scheduled</div>`;
    return;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  let found = false;

  todayRoutine.forEach(slot => {
    if (currentMinutes >= timeToMinutes(slot.start) &&
        currentMinutes < timeToMinutes(slot.end)) {
      const div = document.createElement("div");
      div.className = "class-slot highlight";
      div.innerHTML = `<span class="time">${to12Hour(slot.start)} - ${to12Hour(slot.end)}</span>
                       <span class="subject">${processSubjectText(slot.subject)}</span>`;
      container.appendChild(div);
      found = true;
    }
  });

  if (!found) {
    container.innerHTML = `<div class="no-class">✅ No class right now</div>`;
  }
}

function openModal() {
  const now = new Date();
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const today = dayNames[now.getDay()];
  
  // Set current modal day to today
  currentModalDay = today;
  
  // Update navigation buttons
  updateNavButtons();
  
  // Load routine for current day
  loadRoutineForDay(today);
  
  // Show modal
  const modal = document.getElementById("routineModal");
  modal.style.display = "flex";

  // Prevent body scroll while modal is open
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("routineModal");
  modal.style.display = "none";
  document.body.style.overflow = "auto"; // restore scroll
}

function navigateDay(direction) {
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const currentIndex = dayNames.indexOf(currentModalDay);
  let newIndex = currentIndex + direction;
  
  // Handle wrap-around
  if (newIndex < 0) newIndex = 6;
  if (newIndex > 6) newIndex = 0;
  
  currentModalDay = dayNames[newIndex];
  updateNavButtons();
  loadRoutineForDay(currentModalDay);
}

function updateNavButtons() {
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const currentIndex = dayNames.indexOf(currentModalDay);
  
  // Update button states
  document.getElementById("prevDayBtn").disabled = false;
  document.getElementById("nextDayBtn").disabled = false;
}

function loadRoutineForDay(day) {
  // Check if the day is a holiday
  const now = new Date();
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const todayIndex = dayNames.indexOf(day);
  const currentIndex = dayNames.indexOf(dayNames[now.getDay()]);
  
  // Calculate date for the selected day
  const dateDiff = todayIndex - currentIndex;
  const selectedDate = new Date();
  selectedDate.setDate(selectedDate.getDate() + dateDiff);
  const selectedDateString = formatDate(selectedDate);
  
  const isDayHoliday = holidays2025.includes(selectedDateString);
  
  if (isDayHoliday) {
    document.getElementById("modalDay").textContent = day + " - Holiday (No Classes)";
    document.getElementById("fullRoutine").innerHTML = `<div class="holiday-class">🎉 ${day} is a holiday - No Classes Scheduled</div>`;
  } else {
    document.getElementById("modalDay").textContent = day + " - Full Routine";

    const dayRoutine = routine[day];
    const container = document.getElementById("fullRoutine");
    container.innerHTML = "";

    if (!dayRoutine || dayRoutine.length === 0) {
      container.innerHTML = `<div class="no-class">✅ No Classes Scheduled</div>`;
    } else {
      dayRoutine.forEach(slot => {
        const div = document.createElement("div");
        div.className = "full-slot";
        
        // Handle 'No classes' or 'Recess Hour' specially
        const subjectText = slot.subject.toLowerCase().includes("no class") || slot.subject.toLowerCase().includes("recess")
                            ? slot.subject
                            : processSubjectText(slot.subject);

        div.innerHTML = `<span class="time">${to12Hour(slot.start)} - ${to12Hour(slot.end)}</span>
                         <span class="subject">${subjectText}</span>`;
        container.appendChild(div);
      });
    }
  }
}

// Close modal when clicking outside content
window.onclick = function(event) {
  const modal = document.getElementById("routineModal");
  if (event.target === modal) {
    closeModal();
  }
}

// Initialize
updateClock();
loadCurrentClass();
setInterval(updateClock, 1000);
setInterval(loadCurrentClass, 30000); // Update every 30 seconds