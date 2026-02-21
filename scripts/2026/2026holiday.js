// File Path: scripts/2026holiday.js

(function() {
  // 1. Single Day Holidays (Strictly Format: MM/DD/YYYY)
  const singleHolidays = [
    "01/01/2026", // New Year's Day
    "01/12/2026", // Birthday of Swami Vivekananda
    "01/14/2026", // Makar Sankranti
    "01/22/2026", // Day before Saraswati Puja
    "01/23/2026", // Birthday of Netaji and Saraswati Puja
    "01/26/2026", // Republic Day
    "02/04/2026", // Shab-e-Barat
    "02/14/2026", // Birthday of Thakur Panchanan Barma
    "02/15/2026", // Maha Shivaratri
    "03/03/2026", // Doljatra
    "03/04/2026", // Holi (Day after Doljatra)
    "03/17/2026", // Birthday of Shri Shri Harichand Thakur
    "03/20/2026", // Day before Eid-ul-Fitar
    "03/21/2026", // Eid-ul-Fitar
    "03/26/2026", // Ram Navami
    "03/31/2026", // Mahavir Jayanti
    "04/03/2026", // Good Friday
    "04/14/2026", // Birthday of Dr. B.R. Ambedkar
    "04/15/2026", // Bengali New Year's Day
    "05/01/2026", // May Day and Buddha Purnima
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
    "10/02/2026"  // Birthday of Mahatma Gandhi
  ];

  // Array to hold the final list
  let finalHolidays = [...singleHolidays];

  // Helper function: Start date theke End date obdi shob din automatic add korbe
  function addVacationDays(startStr, endStr) {
    let currentDate = new Date(startStr);
    let endDate = new Date(endStr);
    
    while (currentDate <= endDate) {
      let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      let day = currentDate.getDate().toString().padStart(2, '0');
      let year = currentDate.getFullYear();
      let formattedDate = `${month}/${day}/${year}`; // MM/DD/YYYY Format
      
      // Duplicate date na thakle array te add korbe
      if (!finalHolidays.includes(formattedDate)) {
        finalHolidays.push(formattedDate);
      }
      
      // Din 1 kore barabe
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }

  // 2. Add Vacation Ranges (Format: MM/DD/YYYY)
  addVacationDays("05/16/2026", "06/30/2026"); // Summer Vacation
  addVacationDays("10/10/2026", "11/24/2026"); // Puja Vacation
  addVacationDays("12/25/2026", "12/31/2026"); // Winter Recess

  // 3. Assign to global window object so main HTML can read it
  window.holidaysList = finalHolidays;
})();
