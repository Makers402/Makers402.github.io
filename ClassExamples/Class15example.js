 var listOfCars = [];
            var counter = 0;
            var Car = function(){
                this.horsepower = 100;
                this.currentSpeed = 0;
                this.isRunning = false;
                
                
                this.start = function(){
                    this.isRunning = true;
                }
                this.gas = function(){
                    if(this.isRunning){
                        this.currentSpeed = this.currentSpeed + this.horsepower/100;
                        //this.currentSpeed += this.horsepower/100;
                    }
                }
                this.brake = function(){
                    this.currentSpeed--;
                    if(this.currentSpeed < 0){
                        this.currentSpeed = 0;
                    }
                }
                this.draw = function(carId){
                    $("#"+carId).find(".horsepower").text(this.horsepower);
                    $("#"+carId).find(".currentSpeed").text(this.currentSpeed);
                    $("#"+carId).find(".isRunning").text(this.isRunning);
                }
            };
            $("#add").click(function(e){
                var car = new Car();
                listOfCars.push(car);
                $("#container").append("<div id='car'"+counter+" class='car'>" + 
                 "Horsepower: <span class='horsepower'></span><br/>" +
                "CurrentSpeed: <span class='currentSpeed'></span><br/>" +
                    "isRunning: <span class='isRunning'></span>" +
                "</div>");
                car.draw("car"+counter);
                $("#carsSelect").append("<option value='"+counter+"'>Car "+counter+"</option>")
                counter++;
            });
                $("#start").click(function(e){
                    var carIndex = $("#carsSelect").val();
                    var car = listOfCars[carIndex];
                    car.start();
                    car.draw("car"+ carIndex);
                });
                 $("#gas").click(function(e){
                    var carIndex = $("#carsSelect").val();
                    var car = listOfCars[carIndex];
                    car.gas();
                    car.draw("car"+ carIndex);
                });
                 $("#brake").click(function(e){
                    var carIndex = $("#carsSelect").val();
                    var car = listOfCars[carIndex];
                    car.brake();
                    car.draw("car"+ carIndex);
                });