// Teacher URLs mapping - Updated for 2026
const teacherURLs = {
  "Dr. Md Hasanujjaman": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Koustuv Roy": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Supriya Chatterjee": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Mr. Ikbal Mandal": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Mr. Hirujit Ghosh": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Ms. Nilanjana Nandi": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Mr. Biju Saha": "http://www.apcrgc.org/dept-of-physics-our-departments.html",
  "Dr. Nivedita Chatterjee": "#"
};

// Holiday list for 2026
const holidays2026 = [
  "01/01/2026", // New Year's Day
  "01/12/2026", // Birthday of Swami Vivekananda
  "01/14/2026", // Makar Sankranti
  "01/22/2026", // Day before Saraswati Puja
  "01/23/2026", // Birthday of Netaji & Saraswati Puja
  "01/26/2026", // Republic Day
  "02/04/2026", // Shab-e-Barat
  "02/14/2026", // Birthday of Thakur Panchanan Barma
  "02/15/2026", // Maha Shivaratri
  "03/03/2026", // Doljatra
  "03/04/2026", // Holi
  "03/17/2026", // Birthday of Shri Shri Harichand Thakur
  "03/20/2026", // Day before Eid-ul-Fitar
  "03/21/2026", // Eid-ul-Fitar
  "03/26/2026", // Ram Navami
  "03/31/2026", // Mahavir Jayanti
  "04/03/2026", // Good Friday
  "04/14/2026", // Birthday of Dr. B.R. Ambedkar
  "04/15/2026", // Bengali New Year's Day
  "05/01/2026", // May Day & Buddha Purnima
  "05/09/2026", // Birthday of Rabindranath Tagore
  "07/13/2026", // Birthday of Poet Bhanu Bhakt
  "07/16/2026", // Rathayatra
  "07/21/2026", // College Foundation Day
  "08/02/2026", // Birthday of Acharya Prafulla Chandra Roy
  "08/15/2026", // Independence Day
  "08/26/2026", // Fateha-Dwaz-Daham
  "08/28/2026", // Rakhi Bandhan
  "09/04/2026", // Janmashtami
  "09/17/2026", // Viswakarma Puja
  "10/02/2026", // Birthday of Mahatma Gandhi
];

// Helper: Format date as MM/DD/YYYY
const formatDate = (date) => {
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// Add Summer Vacation Days (May 16 - June 30)
const addSummerVacationDays = () => {
  const startDate = new Date("05/16/2026");
  const endDate = new Date("06/30/2026");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2026.includes(dateString)) {
      holidays2026.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Add Puja Vacation Days (Oct 10 - Nov 24)
const addPujaVacationDays = () => {
  const startDate = new Date("10/10/2026");
  const endDate = new Date("11/24/2026");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2026.includes(dateString)) {
      holidays2026.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Add Winter Vacation Days (Dec 25 - Dec 31)
const addWinterVacationDays = () => {
  const startDate = new Date("12/25/2026");
  const endDate = new Date("12/31/2026");
  let currentDate = new Date(startDate);
  
  while (currentDate <= endDate) {
    const dateString = formatDate(currentDate);
    if (!holidays2026.includes(dateString)) {
      holidays2026.push(dateString);
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
};

// Initialize holiday list with vacation periods
addSummerVacationDays();
addPujaVacationDays();
addWinterVacationDays();

// Check if today is a holiday
const isHoliday = () => {
  const today = new Date();
  const todayString = formatDate(today);
  return holidays2026.includes(todayString);
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
  let processedText = text;
  Object.keys(teacherURLs).forEach(teacher => {
    // Escape special chars for regex
    const escapedTeacher = teacher.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); 
    const regex = new RegExp(escapedTeacher, 'g');
    processedText = processedText.replace(
      regex, 
      `<span class="teacher-link" onclick="event.stopPropagation(); window.open('${teacherURLs[teacher]}', '_blank')">${teacher}</span>`
    );
  });
  return processedText;
}

// ROUTINE 2026 (Even Semester - Sem I/II)
const routine = {
  "MON": [
    { start: "10:30", end: "11:30", subject: "MAJOR-2 - Dr. Md Hasanujjaman" },
    { start: "11:30", end: "12:30", subject: "VAC (EVS)" },
    { start: "12:30", end: "01:30", subject: "VAC (EVS)" },
    { start: "01:30", end: "02:00", subject: "Recess" }, // Implied break
    { start: "03:00", end: "04:00", subject: "SEC - Dr. Koustuv Roy" },
    { start: "04:00", end: "05:00", subject: "SEC - Dr. Md Hasanujjaman" }
  ],
  "TUE": [
    { start: "10:30", end: "11:30", subject: "MIN1 - Dr. Supriya Chatterjee / Dr. Md Hasanujjaman" },
    { start: "11:30", end: "12:30", subject: "MAJOR-2 - Mr. Hirujit Ghosh" },
    { start: "12:30", end: "01:30", subject: "MAJOR-2 - Dr. Md Hasanujjaman" },
    { start: "01:30", end: "02:00", subject: "Recess" },
    { start: "02:00", end: "04:00", subject: "MAJOR-2 (Practical) - Mr. Hirujit Ghosh" }
  ],
  "WED": [
    { start: "10:30", end: "12:30", subject: "MAJOR-1 (Practical) - Dr. Md Hasanujjaman / Dr. Supriya Chatterjee" },
    { start: "12:30", end: "01:30", subject: "MIN1 - Mr. Ikbal Mandal" },
    { start: "01:30", end: "02:00", subject: "Recess" },
    { start: "02:00", end: "03:00", subject: "MAJOR-1 - Dr. Koustuv Roy" },
    { start: "03:00", end: "05:00", subject: "MAJOR-2 (Practical) - Mr. Hirujit Ghosh & Dr. Md Hasanujjaman" }
  ],
  "THU": [
    { start: "10:30", end: "12:30", subject: "MIN1 (Practical) - Mr. Ikbal Mandal & Dr. Md Hasanujjaman" },
    { start: "12:30", end: "01:30", subject: "MAJOR-1 - Dr. Koustuv Roy" },
    { start: "01:30", end: "02:00", subject: "Recess" },
    { start: "02:00", end: "03:00", subject: "MAJOR-2 - Mr. Hirujit Ghosh" },
    { start: "03:00", end: "04:00", subject: "MAJOR-1 - Mr. Ikbal Mandal" }
  ],
  "FRI": [
    { start: "10:30", end: "17:00", subject: "No classes scheduled today" }
  ],
  "SAT": [
    { start: "10:30", end: "11:30", subject: "Remedial - Mr. Hirujit Ghosh" },
    { start: "11:30", end: "12:30", subject: "Remedial - Mr. Ikbal Mandal" },
    { start: "12:30", end: "01:30", subject: "Remedial - Dr. Md Hasanujjaman" },
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
  const clockElement = document.getElementById("clock");
  if(clockElement) clockElement.textContent = `${hours}:${minutes} ${ampm}`;
}

function loadCurrentClass() {
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const now = new Date();
  const today = dayNames[now.getDay()];
  const dayTitle = document.getElementById("dayTitle");
  if(dayTitle) dayTitle.textContent = today;

  const routineBox = document.getElementById("routineBox");
  if(!routineBox) return;
  
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
  if(!container) return;
  
  container.innerHTML = "";

  if (!todayRoutine || (todayRoutine.length === 1 && todayRoutine[0].subject.includes("No classes"))) {
    if(todayRoutine && todayRoutine[0].subject.includes("No classes")) {
         container.innerHTML = `<div class="no-class">✅ No classes scheduled today</div>`;
    } else {
         container.innerHTML = `<div class="no-class">✅ No Classes Scheduled</div>`;
    }
    return;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  let found = false;

  todayRoutine.forEach(slot => {
    // Skip if it's the "No classes" placeholder
    if(slot.subject.includes("No classes")) return;

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
  currentModalDay = today;
  updateNavButtons();
  loadRoutineForDay(today);
  const modal = document.getElementById("routineModal");
  if(modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("routineModal");
  if(modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  }
}

function navigateDay(direction) {
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const currentIndex = dayNames.indexOf(currentModalDay);
  let newIndex = currentIndex + direction;
  if (newIndex < 0) newIndex = 6;
  if (newIndex > 6) newIndex = 0;
  currentModalDay = dayNames[newIndex];
  updateNavButtons();
  loadRoutineForDay(currentModalDay);
}

function updateNavButtons() {
  const prevBtn = document.getElementById("prevDayBtn");
  const nextBtn = document.getElementById("nextDayBtn");
  if(prevBtn) prevBtn.disabled = false;
  if(nextBtn) nextBtn.disabled = false;
}

function loadRoutineForDay(day) {
  const now = new Date();
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
  const todayIndex = dayNames.indexOf(day);
  const currentIndex = dayNames.indexOf(dayNames[now.getDay()]);
  
  // Calculate date for the selected day
  const dateDiff = todayIndex - currentIndex;
  const selectedDate = new Date();
  selectedDate.setDate(selectedDate.getDate() + dateDiff);
  const selectedDateString = formatDate(selectedDate);
  
  const isDayHoliday = holidays2026.includes(selectedDateString);
  const modalDayLabel = document.getElementById("modalDay");
  const container = document.getElementById("fullRoutine");
  
  if(!modalDayLabel || !container) return;

  if (isDayHoliday) {
    modalDayLabel.textContent = day + " - Holiday (No Classes)";
    container.innerHTML = `<div class="holiday-class">🎉 ${day} is a holiday - No Classes Scheduled</div>`;
  } else {
    modalDayLabel.textContent = day + " - Full Routine";
    const dayRoutine = routine[day];
    container.innerHTML = "";

    if (!dayRoutine || dayRoutine.length === 0 || (dayRoutine.length === 1 && dayRoutine[0].subject.includes("No classes"))) {
      container.innerHTML = `<div class="no-class">✅ No Classes Scheduled</div>`;
    } else {
      dayRoutine.forEach(slot => {
        if(slot.subject.includes("No classes")) return;
        
        const div = document.createElement("div");
        div.className = "full-slot";
        
        const subjectText = slot.subject.toLowerCase().includes("recess")
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
// Wait for DOM to load slightly to ensure elements exist
setTimeout(() => {
    updateClock();
    loadCurrentClass();
}, 100);

setInterval(updateClock, 1000);
setInterval(loadCurrentClass, 30000);