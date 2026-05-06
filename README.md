# exercice-regex
A simple interactive JavaScript tool to practice and understand regular expressions by applying real-time transformations and visual feedback.
# 🧪 Regex Practice Tool

An interactive web application built with **HTML, CSS, and JavaScript** to help users learn and practice **regular expressions (regex)** in a visual and intuitive way.

---

## 🚀 Features

- Replace vowels with symbols (`/[aeiouy]/gi`)
- Replace digits with custom characters (`/[0-9]/g`)
- Replace lowercase letters (`/[a-z]/g`)
- Replace whitespace (`/\s/g`)
- Highlight first match of a regex
- Highlight all matches using global flag (`g`)
- Hide numbers in text (basic data masking)
- Display detailed explanations for each regex

---

## 🎯 Purpose

This project was created as a **learning tool** to:

- Understand how regex patterns work
- See the difference between flags like `g` (global) and non-global regex
- Practice string manipulation in JavaScript
- Learn safe DOM manipulation (`textContent` vs `innerHTML`)

---

## 🧠 What I Learned

- How to use `.replace()` with regex
- Difference between `.match()` and `.replace()`
- Handling user input and validation
- DOM manipulation with:
  - `textContent`
  - `innerHTML`
  - `createElement`
- Event handling with `addEventListener`
- Structuring reusable functions

---

## ⚠️ Important Note

This project uses `innerHTML` only for highlighting matched text.  
In real-world applications, this should be handled carefully to avoid **XSS (Cross-Site Scripting)** vulnerabilities.

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox)
- Vanilla JavaScript (ES6)

---

## 📸 Preview

<img width="762" height="543" alt="image" src="https://github.com/user-attachments/assets/247e3e0b-d346-4721-aa29-8bf414823785" />


---

## 📂 How to Use

1. Enter a text in the input field
2. Click one of the buttons to apply a regex transformation
3. View the result instantly
4. Read the explanation displayed on the right

---

## 🔮 Future Improvements

- Add custom regex input field
- Add live typing preview (real-time transformation)
- Improve UI/UX design
- Add copy-to-clipboard feature
- Add more advanced regex examples

---

## 👨‍💻 Author

Created by **Nomena** as part of a web development learning journey.

---
