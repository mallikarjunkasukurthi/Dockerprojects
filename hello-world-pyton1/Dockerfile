# Use official Python image as a base
FROM python:3.9

# Set the working directory
WORKDIR /app

# Copy the application files
COPY app.py requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the application port
EXPOSE 8000

# Run the application
CMD ["python", "app.py"]