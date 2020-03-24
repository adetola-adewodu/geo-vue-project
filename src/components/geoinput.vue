 <template>
  <p align="left">
    Latitude (N/S):
    <br>
    <input type="number" step="0.01" name="Latitude">
    <br>Longitude (E/W):
    <br>
    <input type="number" step="0.01" name="Longitude">
    <br>Radius (miles):
    <br>
    <input type="number" step="0.01" name="RadiusMiles">
    <br>
    <button onclick="createCircleFromCoordinates()">Create Circle From Coordinates</button>
    <br>
    <button onclick="removeCircle()">Remove Circles</button>
    <br>City, State:
    <input type="text" name="address">
    <br>Radius (miles):
    <input type="number" step="0.01" name="addressRadius">
    <!--button onclick="createCircleFromAddress()">Create Polygon From Address</button>
    
    <button onclick="findCoordinates()">Add Point</button>
    <button onclick="removePoints()">Remove all Points</button-->
  </p>
</template>