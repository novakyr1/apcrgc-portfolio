// File Path: scripts/2026holiday.js

(function() {
  // 1. Single Day Holidays (Strictly Format: MM/DD/YYYY)
  const singleHolidays = [
    "01/01/2026", // New Year's Day
    "01/14/2026", // Makar Sankranti
    "01/23/2026", // Birthday of Netaji
    "01/26/2026", // Republic Day
    "02/03/2026", // Saraswati Puja / Day After
    "02/14/2026", // Birthday of Thakur Panchanan Barma
    "02/26/2026", // Maha Shivaratri
    "03/14/2026", // Doljatra & Holi
    "03/15/2026", // Day after Doljatra
    "03/27/2026", // Birthday of Shri Shri Harichand Thakur
    "03/31/2026", // Eid-ul-Fitar
    "04/01/2026", // Day after Eid-ul-Fitar
    "04/10/2026", // Mahavir Jayanti
    "04/14/2026", // Birthday of Dr. B.R. Ambedkar
    "04/15/2026", // Bengali New Year's Day
    "04/18/2026", // Good Friday
    "05/01/2026", // May Day
    "06/27/2026", // Rathayatra
    "07/21/2026", // College Foundation Day
    "08/02/2026", // Birthday of Acharya Prafulla Chandra Roy
    "08/09/2026", // Rakhi Bandhan
    "08/15/2026", // Independence Day
    "09/05/2026", // Fateha-Dwaz-Daham
    "09/17/2026", // Viswakarma Puja
    "12/31/2026"  // Principal's Discretion
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
  addVacationDays("05/05/2026", "06/27/2026"); // Summer Vacation
  addVacationDays("09/22/2026", "11/05/2026"); // Puja Vacation
  addVacationDays("12/25/2026", "12/31/2026"); // Winter Vacation

  // 3. Assign to global window object so main HTML can read it
  window.holidaysList = finalHolidays;
})();
