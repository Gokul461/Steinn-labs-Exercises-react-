# Steinn labs Exercise

A **React-based** playground for experimenting with **Flexbox layouts**, styled using **Tailwind CSS**.

## 🚀 Features
- **Interactive Flexbox Playground** 📏
- **Real-time Preview** 🔄
- **Tailwind CSS for Styling** 🎨
- **React-powered UI** ⚛️
- **API Fetching Practice Done** 🌐
- **Built Reusable Components** 🛠️
  - `Button`
  - `Card`
  - `Modal`
  - `Typography`
  - `Loading page`
  - `Chip`
  - `Dropdown`
  - `Text field`
- **Weather Application** 🌦️

## 🚀 Running the App

To start the development server:
```bash
npm run dev
```

Then open **http://localhost:5173** in your browser.

## 🏗️ Project Structure
```
flex-playground/
│── src/
│   ├── components/
│   │   ├── Exercises/
│   │   │   ├── FlexPlayground.js
│   │   │   ├── ListingFromApi.js
│   │   │   ├── Login.js
│   │   │   ├── Navbar.js
│   │   │   └── UiComponents.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   └── Weather.js
│   ├── App.tsx
│   ├── index.tsx
│   ├── types/
│   │   └── index.ts
│── public/
│── index.html
│── tailwind.config.js
│── postcss.config.js
│── package.json
│── README.md
```

## 🌦️ Weather Application
The weather application allows users to fetch and display weather information for a specified location.

## 🎨 Using Tailwind CSS
Tailwind classes are used to design the Flexbox components. Example:
```jsx
<div className="flex justify-center items-center h-screen">
  <div className="flex gap-4 p-6 bg-gray-100">
    <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">1</div>
    <div className="w-20 h-20 bg-green-500 flex items-center justify-center">2</div>
    <div className="w-20 h-20 bg-red-500 flex items-center justify-center">3</div>
  </div>
</div>
```
# Model UI
![image](https://github.com/user-attachments/assets/4421017b-dcbd-4c4c-b20d-5e5e40243ecc)


## 📜 License
This project is **open-source** and available under the **MIT License**.

---
Made with ❤️ using **React & Tailwind CSS**
