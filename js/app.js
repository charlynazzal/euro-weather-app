// European Cities Database with coordinates
const EUROPEAN_CITIES = [
    { name: "Amsterdam", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
    { name: "Athens", country: "Greece", lat: 37.9838, lon: 23.7275 },
    { name: "Barcelona", country: "Spain", lat: 41.3851, lon: 2.1734 },
    { name: "Berlin", country: "Germany", lat: 52.5200, lon: 13.4050 },
    { name: "Brussels", country: "Belgium", lat: 50.8503, lon: 4.3517 },
    { name: "Budapest", country: "Hungary", lat: 47.4979, lon: 19.0402 },
    { name: "Copenhagen", country: "Denmark", lat: 55.6761, lon: 12.5683 },
    { name: "Dublin", country: "Ireland", lat: 53.3498, lon: -6.2603 },
    { name: "Florence", country: "Italy", lat: 43.7696, lon: 11.2558 },
    { name: "Istanbul", country: "Turkey", lat: 41.0082, lon: 28.9784 },
    { name: "Lisbon", country: "Portugal", lat: 38.7223, lon: -9.1393 },
    { name: "London", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
    { name: "Madrid", country: "Spain", lat: 40.4168, lon: -3.7038 },
    { name: "Milan", country: "Italy", lat: 45.4642, lon: 9.1900 },
    { name: "Munich", country: "Germany", lat: 48.1351, lon: 11.5820 },
    { name: "Oslo", country: "Norway", lat: 59.9139, lon: 10.7522 },
    { name: "Paris", country: "France", lat: 48.8566, lon: 2.3522 },
    { name: "Prague", country: "Czech Republic", lat: 50.0755, lon: 14.4378 },
    { name: "Rome", country: "Italy", lat: 41.9028, lon: 12.4964 },
    { name: "Stockholm", country: "Sweden", lat: 59.3293, lon: 18.0686 },
    { name: "Vienna", country: "Austria", lat: 48.2082, lon: 16.3738 },
    { name: "Warsaw", country: "Poland", lat: 52.2297, lon: 21.0122 },
    { name: "Zurich", country: "Switzerland", lat: 47.3769, lon: 8.5417 }
];

// Weather code mapping for 7Timer API
const WEATHER_CODES = {
    // Sunny/Clear weather
    'clear': { 
        description: 'Clear Sky', 
        icon: 'fas fa-sun', 
        color: '#f9c74f',
        cardClass: 'weather-sunny',
        headerClass: 'weather-header-sunny'
    },
    'pcloudy': { 
        description: 'Partly Cloudy', 
        icon: 'fas fa-cloud-sun', 
        color: '#f8961e',
        cardClass: 'weather-partly-cloudy',
        headerClass: 'weather-header-partly-cloudy'
    },
    
    // Cloudy weather
    'mcloudy': { 
        description: 'Mostly Cloudy', 
        icon: 'fas fa-cloud', 
        color: '#adb5bd',
        cardClass: 'weather-cloudy',
        headerClass: 'weather-header-cloudy'
    },
    'cloudy': { 
        description: 'Cloudy', 
        icon: 'fas fa-cloud', 
        color: '#6d6875',
        cardClass: 'weather-cloudy',
        headerClass: 'weather-header-cloudy'
    },
    'humid': { 
        description: 'Foggy', 
        icon: 'fas fa-smog', 
        color: '#dee2e6',
        cardClass: 'weather-foggy',
        headerClass: 'weather-header-foggy'
    },
    
    // Rain weather
    'lightrain': { 
        description: 'Light Rain', 
        icon: 'fas fa-cloud-rain', 
        color: '#90be6d',
        cardClass: 'weather-rain',
        headerClass: 'weather-header-rain'
    },
    'oshower': { 
        description: 'Occasional Showers', 
        icon: 'fas fa-cloud-showers-heavy', 
        color: '#43aa8b',
        cardClass: 'weather-rain',
        headerClass: 'weather-header-rain'
    },
    'ishower': { 
        description: 'Isolated Showers', 
        icon: 'fas fa-cloud-sun-rain', 
        color: '#4d908e',
        cardClass: 'weather-rain',
        headerClass: 'weather-header-rain'
    },
    'rain': { 
        description: 'Rain', 
        icon: 'fas fa-cloud-showers-heavy', 
        color: '#277da1',
        cardClass: 'weather-rain',
        headerClass: 'weather-header-rain'
    },
    
    // Snow weather
    'lightsnow': { 
        description: 'Light Snow', 
        icon: 'fas fa-snowflake', 
        color: '#c7f9cc',
        cardClass: 'weather-snow',
        headerClass: 'weather-header-snow'
    },
    'snow': { 
        description: 'Snow', 
        icon: 'fas fa-snowflake', 
        color: '#f8f9fa',
        cardClass: 'weather-snow',
        headerClass: 'weather-header-snow'
    },
    'rainsnow': { 
        description: 'Rain and Snow', 
        icon: 'fas fa-cloud-meatball', 
        color: '#577590',
        cardClass: 'weather-snow-rain',
        headerClass: 'weather-header-snow-rain'
    },
    
    // Storm weather
    'ts': { 
        description: 'Thunderstorm', 
        icon: 'fas fa-bolt', 
        color: '#f94144',
        cardClass: 'weather-thunder',
        headerClass: 'weather-header-thunder'
    },
    'tsrain': { 
        description: 'Thunderstorm with Rain', 
        icon: 'fas fa-poo-storm', 
        color: '#f3722c',
        cardClass: 'weather-thunder',
        headerClass: 'weather-header-thunder'
    }
};

// Travel tips based on weather
const TRAVEL_TIPS = {
    'clear': 'Perfect weather for sightseeing! Don\'t forget your sunscreen.',
    'pcloudy': 'Great weather for exploring the city. The light clouds will keep you cool.',
    'mcloudy': 'Good day for museum visits and indoor attractions.',
    'cloudy': 'A perfect day for indoor activities like visiting museums or enjoying local cuisine.',
    'humid': 'Be careful when driving as visibility might be reduced. Good day for indoor activities.',
    'lightrain': 'Light rain shouldn\'t stop you! Grab an umbrella and explore the local cafes.',
    'oshower': 'Pack a light raincoat and enjoy the city between showers.',
    'ishower': 'Occasional rain expected. Have an umbrella handy but don\'t let it ruin your plans!',
    'lightsnow': 'Light snow makes for beautiful photos! Dress warmly and enjoy the winter atmosphere.',
    'rain': 'A great day to experience local indoor culture. Try a cooking class or visit galleries.',
    'snow': 'The city looks magical covered in snow! Perfect for winter activities or cozy cafes.',
    'rainsnow': 'Mixed precipitation expected. Best to plan indoor activities and have waterproof clothing.',
    'ts': 'Thunderstorms expected. Stay indoors and enjoy local cuisine or cultural attractions.',
    'tsrain': 'Severe weather expected. We recommend indoor activities for safety and comfort.'
};

// DOM Elements
let citySelect;
const forecastContainer = document.getElementById('forecast-container');
const unitToggleBtn = document.getElementById('unit-toggle-btn');
const cityInfo = document.getElementById('city-info');
const currentTemp = document.getElementById('current-temp');
const tipText = document.getElementById('tip-text');
const cityButtons = document.querySelectorAll('.city-btn');
const currentWeatherBox = document.querySelector('.current-weather');
const citySelectContainer = document.querySelector('.search-container');

// App state
let useCelsius = true;
let currentCity = null;
let currentForecast = null;
let fetchController = null;
let isLoading = false;

// Format date from 7Timer API (YYYYMMDD)
function formatDate(dateString) {
    const year = dateString.substring(0, 4);
    const month = dateString.substring(4, 6);
    const day = dateString.substring(6, 8);
    
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    });
}

// Convert temperature between Celsius and Fahrenheit
function convertTemp(temp, celsius = true) {
    if (celsius) {
        return temp;
    } else {
        return Math.round((temp * 9/5) + 32);
    }
}

// Format temperature with unit
function formatTemp(temp) {
    const value = convertTemp(temp, useCelsius);
    const unit = useCelsius ? '°C' : '°F';
    return `${value}${unit}`;
}

// Create a forecast card element
function createForecastCard(date, weather, maxTemp, minTemp, index) {
    const weatherCode = weather.toLowerCase();
    const weatherInfo = WEATHER_CODES[weatherCode] || WEATHER_CODES.cloudy;
    
    const card = document.createElement('div');
    card.className = `forecast-card ${weatherInfo.cardClass}`;
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="forecast-day">${formatDate(date)}</div>
        <i class="${weatherInfo.icon} weather-icon" style="color: ${weatherInfo.color}"></i>
        <div class="weather-condition">${weatherInfo.description}</div>
        <div class="temperature high">High: ${formatTemp(maxTemp)}</div>
        <div class="temperature low">Low: ${formatTemp(minTemp)}</div>
    `;
    
    return card;
}

// Super simple city selector creation - minimal code, reliable function
function createSimpleCitySelector() {
    // Create a basic select element - most reliable on all mobile platforms
    const selectElement = document.createElement('select');
    selectElement.className = 'city-select';
    selectElement.id = 'city-select';
    
    // Add a placeholder option
    const placeholderOption = document.createElement('option');
    placeholderOption.value = '';
    placeholderOption.textContent = 'Select a city';
    placeholderOption.disabled = true;
    selectElement.appendChild(placeholderOption);
    
    // Add all cities as options
    EUROPEAN_CITIES.sort((a, b) => a.name.localeCompare(b.name)).forEach(city => {
        const option = document.createElement('option');
        option.value = city.name;
        option.textContent = `${city.name}, ${city.country}`;
        selectElement.appendChild(option);
    });
    
    // Add change event listener
    selectElement.addEventListener('change', function() {
        if (this.value && !isLoading) {
            fetchWeather(this.value);
        }
    });
    
    // Clean container and add new select
    citySelectContainer.innerHTML = '';
    citySelectContainer.appendChild(selectElement);
    
    // Store reference to the select element
    citySelect = selectElement;
}

// Create/get loading overlay
function getLoadingOverlay() {
    let overlay = document.querySelector('.loading-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="loading"></div>';
        document.body.appendChild(overlay);
    }
    
    return overlay;
}

// Show loading state
function showLoading() {
    isLoading = true;
    const overlay = getLoadingOverlay();
    overlay.classList.add('active');
    
    // Clear previous content immediately
    forecastContainer.innerHTML = '';
    cityInfo.textContent = 'Loading...';
    currentTemp.textContent = '';
    tipText.textContent = '';
}

// Hide loading state
function hideLoading() {
    isLoading = false;
    const overlay = getLoadingOverlay();
    overlay.classList.remove('active');
}

// Fetch weather forecast
async function fetchWeather(cityName) {
    // Cancel any ongoing fetch
    if (fetchController) {
        fetchController.abort();
    }
    
    // Create new abort controller
    fetchController = new AbortController();
    const signal = fetchController.signal;
    
    showLoading();
    
    try {
        const city = EUROPEAN_CITIES.find(c => c.name.toLowerCase() === cityName.toLowerCase());
        if (!city) {
            throw new Error('City not found');
        }
        
        currentCity = city;
        const url = `https://www.7timer.info/bin/api.pl?lon=${city.lon}&lat=${city.lat}&product=civillight&output=json`;
        
        const response = await fetch(url, { signal });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        currentForecast = data.dataseries;
        
        // Update UI with fetched data
        displayForecast(data.dataseries);
        updateCurrentWeather(city, data.dataseries[0]);
        updateTravelTip(data.dataseries[0].weather);
        
        // Save last selected city to localStorage
        localStorage.setItem('lastCity', cityName);
        
        // Update select value
        if (citySelect) {
            citySelect.value = cityName;
        }
    } catch (error) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Error fetching weather data:', error);
            forecastContainer.innerHTML = `
                <div class="error">
                    <p>Failed to load weather data. Please try again later.</p>
                    <p>Error: ${error.message}</p>
                </div>
            `;
        }
    } finally {
        hideLoading();
    }
}

// Display the 7-day forecast
function displayForecast(forecastData) {
    forecastContainer.innerHTML = '';
    
    // Create all cards first, then append at once for better performance
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 7 && i < forecastData.length; i++) {
        const day = forecastData[i];
        const card = createForecastCard(
            day.date.toString(),
            day.weather,
            day.temp2m.max,
            day.temp2m.min,
            i
        );
        
        fragment.appendChild(card);
    }
    
    forecastContainer.appendChild(fragment);
}

// Update current weather display
function updateCurrentWeather(city, todayData) {
    // Get weather info for current weather
    const weatherCode = todayData.weather.toLowerCase();
    const weatherInfo = WEATHER_CODES[weatherCode] || WEATHER_CODES.cloudy;
    
    // Update current weather card background by adding the appropriate CSS class
    if (currentWeatherBox) {
        // Remove all existing weather header classes
        const classesToRemove = [];
        for (let className of currentWeatherBox.classList) {
            if (className.startsWith('weather-header-')) {
                classesToRemove.push(className);
            }
        }
        classesToRemove.forEach(cls => currentWeatherBox.classList.remove(cls));
        
        // Add the new weather-specific class
        currentWeatherBox.classList.add(weatherInfo.headerClass);
    }
    
    // Update city info
    cityInfo.textContent = `${city.name}, ${city.country} | ${formatDate(todayData.date.toString())}`;
    
    // Update current temperature
    currentTemp.innerHTML = `${weatherInfo.description} | High: ${formatTemp(todayData.temp2m.max)} | Low: ${formatTemp(todayData.temp2m.min)}`;
}

// Update travel tip
function updateTravelTip(weather) {
    const tip = TRAVEL_TIPS[weather.toLowerCase()] || 'Enjoy your trip!';
    tipText.textContent = tip;
}

// Toggle temperature unit
function toggleTemperatureUnit() {
    useCelsius = !useCelsius;
    unitToggleBtn.textContent = useCelsius ? '°C' : '°F';
    
    // Update displayed temperatures
    if (currentForecast) {
        displayForecast(currentForecast);
        updateCurrentWeather(currentCity, currentForecast[0]);
    }
    
    // Save preference to localStorage
    localStorage.setItem('useCelsius', useCelsius);
}

// Load saved preferences
function loadSavedPreferences() {
    // Load temperature unit preference
    const savedUnit = localStorage.getItem('useCelsius');
    if (savedUnit !== null) {
        useCelsius = savedUnit === 'true';
        unitToggleBtn.textContent = useCelsius ? '°C' : '°F';
    }
    
    // Load last selected city
    const lastCity = localStorage.getItem('lastCity');
    if (lastCity && citySelect) {
        citySelect.value = lastCity;
        fetchWeather(lastCity);
    } else {
        // Default to Paris if no saved city
        fetchWeather('Paris');
    }
}

// Set up event listeners
function setupEventListeners() {
    // Temperature unit toggle event
    unitToggleBtn.addEventListener('click', toggleTemperatureUnit);
    
    // Popular city buttons
    cityButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (isLoading) return;
            
            const city = button.getAttribute('data-city');
            if (citySelect) {
                citySelect.value = city;
            }
            fetchWeather(city);
        });
    });
}

// Initialize application
function initApp() {
    // Create loading overlay
    getLoadingOverlay();
    
    // Create simple city selector - most reliable approach
    createSimpleCitySelector();
    
    // Set up event listeners
    setupEventListeners();
    
    // Load saved preferences
    loadSavedPreferences();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);