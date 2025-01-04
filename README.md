# Automatic Number Plate Recognition (ANPR)

This repository contains the implementation of an Automatic Number Plate Recognition (ANPR) system. The project is built using Python and Flask and provides functionalities such as registering vehicles, searching for vehicle data, and displaying top records based on license plates. It also includes an attendance management feature for tracking user activity within specified time and date ranges. This project was implemented in 2021-2022.

## Features

- **Vehicle Registration**: Allows users to register vehicle and driver details, including images of the vehicle, license plate, and the driver.
- **Search Functionality**: Provides an interface to search for vehicles using various filters, such as time range, date range, and user ID.
- **Top Records Display**: Displays the top vehicle records in a user-friendly interface.
- **Attendance Tracking**: Enables searching and displaying user activity based on time and date filters.
- **File Upload Handling**: Supports uploading ZIP files and video files for user registration and processing.
- **Date Conversion**: Supports conversion of Gregorian dates to the Jalali calendar for localized usage.

## Requirements

### Libraries
The project uses the following Python libraries:
- `Flask`: For building the web application.
- `configparser`: For handling configuration files.
- `jdatetime`: For Jalali date manipulation.
- `elasticsearch`: For interacting with an Elasticsearch instance.
- `requests`: For handling HTTP requests.
- `datetime`: For date and time operations.
- `cv2`: For video processing.
- `json`: For handling JSON data.

### Configuration File
The project relies on a configuration file located at `cfg/config.cfg`. This file should include settings such as secret keys, upload paths, and Elasticsearch connection details.

### Static Assets
Static files, such as images, are stored in the `./static` directory.

## Project Structure

```
ANPR/
├── app.py                     # Main application file
├── app_attendance.py          # Attendance tracking module
├── app_attendance_data_register.py  # File upload and user data registration module
├── templates/                 # HTML templates for the web application
├── static/                    # Static assets (images, CSS, JS)
├── cfg/config.cfg             # Configuration file
├── uploads/                   # Directory for uploaded files
```

## API Endpoints

### 1. Home
**Endpoint:** `/`

- Renders the home page (`base.html`) for uploading files.

### 2. Search
**Endpoint:** `/search`

- **GET**: Displays the search interface.
- **POST**: Processes the search request and returns filtered vehicle or user data.

### 3. Register
**Endpoint:** `/register`

- **GET**: Displays the registration form.
- **POST**: Processes vehicle and driver registration.

### 4. File Upload
**Endpoint:** `/`

- **GET**: Renders the file upload form (`register.html`).
- **POST**: Handles the upload of ZIP and video files for user registration.

### 5. Top Records
**Endpoint:** `/top10`

- Displays the top 10 vehicle records.

### 6. Attendance Search
**Endpoint:** `/`

- **GET**: Displays the attendance search interface with default date and time.
- **POST**: Processes the attendance search and returns filtered user activity data based on input criteria.

### 7. Display Image
**Endpoint:** `/display/<filename>`

- Redirects to the static folder to display an image.

## How to Run

1. Install the required Python libraries:
   ```bash
   pip install flask jdatetime elasticsearch requests opencv-python
   ```

2. Set up the configuration file at `cfg/config.cfg`.

3. Run the Flask application:
   ```bash
   python app.py
   ```

4. Access the application at `http://127.0.0.1:5000/` in your web browser.
