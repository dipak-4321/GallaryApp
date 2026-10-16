# 📸 GalleryApp

**GalleryApp** is a responsive photo gallery application built using **React.js, Vite, and Tailwind CSS**. It fetches photos from an API and displays them in a clean, modern gallery layout. Users can browse photos using the **Next** and **Prev** pagination buttons.

## ✨ Features

- 🖼️ **Photo Gallery:** Fetches photos from an API and displays them in a gallery.
- 🔄 **API Integration:** Retrieves photo data dynamically using Axios.
- 📄 **Pagination:** Displays 100 photos per page and provides Next and Prev buttons to navigate between pages.
- 📱 **Responsive Design:** Works on mobile phones, tablets, laptops, and desktop screens.
- 🎨 **Tailwind CSS:** Uses utility classes to create a clean and responsive interface.
- ⚡ **Fast Development:** Built with Vite for a fast development experience.
- 🔍 **Photo Viewing:** Allows users to click photos to view the selected image.

## 🛠️ Technologies Used

- **React.js** — Building the user interface with reusable components.
- **Vite** — Development server and build tool.
- **Tailwind CSS** — Styling and responsive layouts.
- **Axios** — Fetching photo data from the API.
- **Picsum Photos API** — Providing random photo data and image URLs.
- **JavaScript (ES6+)** — Application logic and pagination.

## 📷 How It Works

1. The application fetches photo data from the Picsum Photos API.
2. Photos are displayed dynamically in a responsive gallery.
3. Each page displays 100 photos.
4. The **Next** button loads the next page of photos.
5. The **Prev** button returns to the previous page.
6. The layout adjusts automatically according to the user's screen size.

## 🚀 Getting Started

Follow these steps to run GalleryApp on your local machine.

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git (optional, for cloning the repository)

### Installation

**1. Clone the repository**

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

**2. Navigate to the project folder**

```bash
cd GalleryApp
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

**5. Open the application**

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
GalleryApp/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 📱 Responsive Design

GalleryApp uses Tailwind CSS responsive utilities to adapt the gallery layout to different screen sizes.

- **Mobile:** A compact layout suitable for smaller screens.
- **Tablet:** An adjusted gallery layout that uses the available space efficiently.
- **Desktop:** A wider gallery with multiple photos displayed in rows.

## 🌐 API Used

**Picsum Photos API**

API endpoint:

```text
https://picsum.photos/v2/list?page=1&limit=100
```

The `page` parameter controls pagination, while `limit=100` requests up to 100 photos per page.

API documentation: https://picsum.photos/

## 🔮 Future Improvements

- Add a search feature for finding photos.
- Add category-based photo filtering.
- Implement a photo preview modal.
- Add a loading skeleton while fetching photos.
- Add error handling for API failures.
- Allow users to save their favorite photos.

## 👨‍💻 Author

**Dipak Sah**

GitHub: https://github.com/dipak-4321

---

⭐ If you like this project, consider giving the repository a star!
