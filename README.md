# EuroWeather - European Travel Weather Forecast

![EuroWeather Banner](https://source.unsplash.com/featured/?europe,weather/1200x400)

EuroWeather is a responsive web application that provides 7-day weather forecasts for major European cities, helping travelers plan their trips more effectively. The app features a clean, modern interface focused on usability and functionality.

## 🌟 Features

- **7-Day Weather Forecasts**: Get detailed weather predictions for a week ahead
- **23 Major European Cities**: Weather data for popular travel destinations across Europe
- **Travel Tips**: Personalized travel suggestions based on the weather conditions
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean, Modern UI**: User-friendly interface with intuitive navigation
- **Popular Destinations Section**: Quick access to commonly searched cities
- **Temperature Conversion**: Toggle between Celsius and Fahrenheit
- **User Preferences**: Remembers your last selected city and temperature unit

## 🚀 Demo

View the live demo: [EuroWeather](https://charlynazzal.github.io/euro-weather-app/)

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Dynamic content and API integration
- **7Timer API**: Free weather data source
- **Font Awesome**: Icons for enhanced UI
- **Google Fonts**: Typography improvements
- **LocalStorage**: Storing user preferences

## 📋 API Information

This project uses the [7Timer API](http://www.7timer.info/doc.php), a free weather forecast service that doesn't require API keys. The API endpoint used in this project is:

- Civil Light Product: `http://www.7timer.info/bin/api.pl?lon=[longitude]&lat=[latitude]&product=civillight&output=json`

## 🧰 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/charlynazzal/euro-weather-app.git
   cd euro-weather-app
   ```

2. **Open the project**
   - Simply open the `index.html` file in your web browser
   - Alternatively, use a local development server:
     ```bash
     npx http-server
     ```

3. **Deployment**
   - The site can be deployed on GitHub Pages:
     1. Go to repository settings
     2. Navigate to "Pages" section
     3. Select the main branch as the source
     4. Save settings and wait for deployment

## 🔍 Project Structure

```
euro-weather-app/
├── index.html            # Main HTML file
├── css/
│   └── styles.css        # Stylesheet
├── js/
│   └── app.js            # JavaScript functionality
└── README.md             # Project documentation
```

## 🖥️ Key UI Improvements

- **Modern Color Scheme**: Clean blue gradient design with strategic accent colors
- **Responsive Card Layout**: Grid-based forecast cards that adapt to screen size
- **Animated Elements**: Subtle animations for improved user experience
- **Improved Usability**: Simplified city selection and temperature unit toggle
- **Popular Cities Section**: Quick access buttons for common destinations
- **Weather-Specific Styling**: Colors and icons change based on weather conditions
- **Loading States**: Clear visual feedback during API requests
- **Error Handling**: User-friendly error messages

## 🚧 Future Enhancements

- Add a "favorite cities" feature for users to save their preferred destinations
- Implement more detailed hourly forecasts
- Include additional weather data like precipitation probability and UV index
- Add actual photos of each city with the weather condition
- Implement language selection for international travelers
- Add a map visualization for better city selection
- Include air quality index data where available

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [7Timer API](http://www.7timer.info/) for providing free weather data
- [Font Awesome](https://fontawesome.com/) for the beautiful icons
- [Google Fonts](https://fonts.google.com/) for typography
- [Unsplash](https://unsplash.com/) for placeholder images

---

Created with ❤️ by Charly