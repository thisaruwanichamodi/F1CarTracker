#include <Wire.h>
#include <TinyGPS++.h>
#include <HTTPClient.h>               
#include <WiFi.h>    

const char* ssid = "HUAWEI GR3 2017";              //Add your WIFI network name 
const char* password =  "ash12345";  

WiFiServer server(80);


#define RXD2 16
#define TXD2 17
HardwareSerial neogps(1);
TinyGPSPlus gps;

void setup() {
  Serial.begin(9600);
  //Begin serial communication Arduino IDE (Serial Monitor)

  //Begin serial communication Neo6mGPS
  neogps.begin(9600, SERIAL_8N1, RXD2, TXD2);

  Serial.println();
    Serial.println();
    Serial.print("Connecting to ");
    Serial.println(ssid);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected.");
    Serial.println("IP address: ");
    Serial.println(WiFi.localIP());
    
    server.begin();


}

void loop() {
  // listen for incoming clients

   WiFiClient client = server.available(); 
  

  //If newData is true
  if (client) {                             // if you get a client,
    Serial.println("New Client.");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
              boolean newData = false;
           for (unsigned long start = millis(); millis() - start < 1000;)
              {
                while (neogps.available())
                {
                  if (gps.encode(neogps.read()))
                  {
                    newData = true;
                  }
                }
              }
            if(newData == true)
              {
                newData = false;
                Serial.println(gps.satellites.value());
               if (gps.location.isValid() == 1)
                {
                //String gps_speed = String(gps.speed.kmph());

                 /* Serial.print("Raw date DDMMYY = ");
                  Serial.print(gps.date.value());
                  Serial.println(); 
                  client.print("Raw date DDMMYY = ");
                  client.print(gps.date.value());
                  client.println();*/ 
                   
                  client.print("                <h1>RACING CAR TRACKER DATA TERMINAL</h1><br>");
                  // Year (2000+) (u16)
                  Serial.print("Year = "); 
                  Serial.print(gps.date.year());
                  client.print("Year = "); 
                  client.print(gps.date.year());
                  

                    // Month (1-12) (u8)
                  Serial.print(" Month = "); 
                  Serial.print(gps.date.month()); 
                  client.print(" Month = "); 
                  client.print(gps.date.month()); 
                    // Day (1-31) (u8)
                  Serial.print(" Day = "); 
                  Serial.print(gps.date.day()); 
                  Serial.println(); 
                  client.print(" Day = "); 
                  client.print(gps.date.day()); 
                  client.print("<br>");
                  client.print("<br>");

                  client.print(" Hours = "); 
                  client.print(gps.time.hour()+5); 
                  client.println();
                  client.print(" Minutes = "); 
                  client.print(gps.time.minute()+30); 
                  client.println();
                  client.print(" Sceconds = "); 
                  client.print(gps.time.second()); 
                  client.print("<br>"); 
                  client.print("<br>");
                

                  Serial.print("Latitude: ");
                  Serial.print(gps.location.lat());
                  client.print("Latitude: ");
                  client.print(gps.location.lat());
                  client.print("<br>");
                  client.print("<br>"); 
                
                  Serial.print(" Lng: ");
                  Serial.print(gps.location.lng());
                  Serial.println();
                  client.print(" Longitude: ");
                  client.print(gps.location.lng());
                  client.print("<br>");
                  client.print("<br>");

                  Serial.print("Speed: ");
                  Serial.print(gps.speed.kmph());
                  Serial.println();
                  client.print("Speed: ");
                  client.print(gps.speed.kmph());
                  client.print("<br>");
                  client.print("<br>");

                  Serial.print("SAT:");
                  Serial.print(gps.satellites.value());
                  Serial.println();
                  client.print("Satellite:");
                  client.print(gps.satellites.value());
                  client.print("<br>");
                  client.print("<br>");

                  Serial.print("ALT:");
                  Serial.print(gps.altitude.meters(), 0);
                  Serial.println();
                  client.print("Altitude:");
                  client.print(gps.altitude.meters(), 0);
                  client.print("<br>");
                  client.print("<br>");
                  
                }
                else
                {

                  Serial.print("No Data");

                }
              }
              else
              {
                

                Serial.print("No Data");

              }

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
  
}

