# Computer Vision Inference Frontend

A lightweight web interface for testing an image-classification API. Upload an image, send it to a MobileNetV4 model trained on ImageNet, and view the highest-confidence result alongside the remaining top predictions and request time.

## Features

- Local image selection and preview
- File name and size display
- Top prediction with confidence score
- Additional predictions with confidence bars
- API response-time measurement
- Responsive layout for desktop and mobile
- No frontend framework or build step required

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Fetch API

## Getting Started

### Prerequisites

- A modern web browser
- An HTTP server for serving the frontend
- The inference backend running at `http://localhost:8000`

### Installation

Clone the repository:

```bash
git clone https://github.com/ridhaginanjar/cv-inference-fe.git
cd cv-inference-fe
```

Start a local static server. For example, with Python:

```bash
python3 -m http.server 5500
```

Then open [http://localhost:5500](http://localhost:5500) in your browser.

## Backend API

The frontend sends the selected image to:

```http
POST http://localhost:8000/upload-image
Content-Type: multipart/form-data
```

The uploaded file is submitted in a form field named `file`. The response is expected to be a JSON array of strings, with each string formatted as `label:confidence`:

```json
[
  "golden retriever:87.42",
  "Labrador retriever:8.31",
  "cocker spaniel:2.17"
]
```

Confidence values are displayed as percentages. Ensure the backend allows cross-origin requests from the frontend's local origin, such as `http://localhost:5500`.

To use a different backend address, update `API_URL` in `index.html`:

```js
const API_URL = "http://localhost:8000/upload-image";
```

## Usage

1. Click **Please Upload an Image** and select an image.
2. Review the image preview and file information.
3. Click **Predict** to send the image to the inference API.
4. Review the predicted class, confidence scores, and response time.
5. Click **Reset** to clear the current image and results.

## Project Structure

```text
cv-inference-fe/
├── images/
│   └── preview.jpeg
├── index.html
├── style.css
└── README.md
```

- `index.html` contains the page markup and inference request logic.
- `style.css` contains the responsive layout and component styles.
- `images/preview.jpeg` is a sample image that can be used to test the interface.

## Troubleshooting

- **No prediction appears:** Confirm that the backend is running on port `8000` and that its response matches the expected format.
- **The browser reports a CORS error:** Allow the frontend origin in the backend's CORS configuration.
- **The request fails with a network error:** Verify the `API_URL` value and check that the frontend and backend URLs are reachable.

