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
- **Login page with loading**
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
![image](https://github.com/user-attachments/assets/1a1198fc-3fd2-45da-8892-886f7bccdad4)
![image](https://github.com/user-attachments/assets/feb818d5-b344-4975-8585-02e5c259d2b1)
![image](https://github.com/user-attachments/assets/e1bbf9cb-cdae-4bdb-b572-b8129255d5b9)
![image](https://github.com/user-attachments/assets/1d19c8c2-9025-49c7-ad4d-174a5ef675e0)
![image](https://github.com/user-attachments/assets/849dcd5d-4f7c-408d-a9ef-08c4c05a047e)



---
Made with ❤️ using **React & Tailwind CSS**
