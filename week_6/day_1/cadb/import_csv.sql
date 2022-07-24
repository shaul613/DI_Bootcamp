COPY city_info(event_datetime, city, temperature, light, airquality_raw, sound, humidity, dust)
FROM 'C:\Users\Public\Documents\city_info.csv' DELIMITER ',' CSV HEADER;
