# Simple Counter

A simple and lightweight counter application built with **HTML**, **CSS**, and **JavaScript**.  
This project demonstrates basic DOM manipulation and event handling — perfect for beginners learning web development.

---

## 📋 Table of Contents
- [About](#about)
- [Features](#features)
- [Demo](#demo)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## 🧠 About
**Simple Counter** is a small project that displays a number on the screen and allows users to:
- Increase the count
- Decrease the count
- Reset it to zero  

It’s a great beginner-friendly JavaScript project that helps you understand how to:
- Work with the DOM (`document.getElementById`, `addEventListener`)
- Manipulate text content dynamically
- Handle button click events

---

## 🚀 Features
- Increment the counter
- Decrement the counter
- Reset the counter
- Clean and minimal user interface
- Built without any external libraries — pure HTML, CSS, and JavaScript

---

## 🌐 Demo

👉 [Click Here to View Live](https://alfishanshaikh.github.io/simple-counter/) 

---

## 📁 Project Structure
```
simple-counter/
│
├── index.html       # The main HTML file
├── style.css        # The styling for the counter
└── script.js        # The logic behind the counter
```

---

## ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/AlfishanShaikh/simple-counter.git

# Navigate into the folder
cd simple-counter

# Open the HTML file in your browser
open index.html
```

Or just **download the ZIP** from GitHub and double-click on `index.html` to run it.

---

## 🧩 Usage

1. Open the project in any browser.
2. Use the buttons to control the counter:
   - `+` → Increase the count
   - `-` → Decrease the count
   - `Reset` → Reset the count to 0

---

## 💡 How It Works

- The counter value is displayed inside an HTML element (like a `<span>` or `<div>`).
- Each button has an event listener attached to it:
  - Increment button adds `+1`
  - Decrement button subtracts `-1`
  - Reset button sets value to `0`
- JavaScript dynamically updates the displayed value every time a button is clicked.

**Core logic (simplified):**
```javascript
let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
```

---

## 🔧 Future Improvements
- Save counter value in **localStorage**
- Add **keyboard shortcuts**
- Animate count changes
- Add dark mode / light mode toggle

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

1. Fork this repository
2. Create your feature branch:  
   `git checkout -b feature/my-feature`
3. Commit your changes:  
   `git commit -m 'Add some feature'`
4. Push to the branch:  
   `git push origin feature/my-feature`
5. Submit a Pull Request

---

## 📄 License
This project currently does not include a license.  
You may add one (MIT recommended) for open-source usage.



---
