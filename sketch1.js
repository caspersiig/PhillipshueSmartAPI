    // sætter det op så vi kan kommunikere med FACE-API
    const canvas = document.getElementById('overlay');

    function setup() {
        // laver knap til at start/stop ansigts genkendelsen
        startknap = createButton('start/stop');
        startknap.position(50, 300);
        startknap.mousePressed(StopMan);
    }

    // kopiered en function fra https://stackoverflow.com/questions/5223/length-of-a-javascript-object det gør det
    // muligt at finde .length af obejkter så vi kan se hvor mange ansigter der er
    Object.size = function (obj) {
        var size = 0,
            key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };
    // en async function der venter på at få svar fra Face apiet før den processere svaret
    async function findansigt() {
        var input = document.getElementById('videoElement')
        //loader api model
        await faceapi.nets.tinyFaceDetector.loadFromUri('/model/');
        // sender billeder til API og detections er et objekt der bliver fyldt med hvad API'en opdager
        var detections = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions());
        //laver skærmen der viser ansigts boxe lidt mindre end hvad den får så boxende altid bliver vidst på en eller anden måde
        // præcision af boxe er mindre vigtigt end at altid at kunne se når man bliver opdaget af programmet
        const displaySize = {
            width: 310,
            height: 230
        }
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        // hvisker de gamle ansigter ud
        clearcanvas();
        //tegner nye ansigter
        faceapi.draw.drawDetections(canvas, resizedDetections)
        //laver en variable med mængden af ansigter
        var mængdenafansigter = Object.size(detections);
        console.log(mængdenafansigter);
        ændrerlys(mængdenafansigter);
        
    }

    //hele den her function er bare administration af start/stop knap
    var korlortet = false;
    function StopMan() {
        if (korlortet == true) {
            korlortet = false;
        } else {
            korlortet = true;
        }
    }
    //en function der tager canvaset og hvisker den ud
    function clearcanvas() {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
    }
    //bruger draw function til at tælle tid baseret på hvor hurtigt computeren programmet kører er
    function draw() {
        if (frameCount % 15 == 1 && korlortet == true) {
            findansigt();

        }
    }

    // kommunikation med HUE API

        function ændrerlys(antalansigter){
            // laver et switch case der vælger farve baseret på hvor mange ansigter der er
            var gravko = 0;
            console.log(antalansigter);
            switch (antalansigter) {
                case 1:
                    gravko = 46920;
                    break;
                    case 2:
                    gravko = 25500;
                        break;
                        case 3:
                    gravko = 51000;
                            break;
                default: 0;
                    break;
            }
            // bruger jquery til at sende en put request med farven der før blev valgt
            $.ajax({
                type: 'put',
                url: 'https://192.168.0.102/api/IJEMSjbPcKI2sNjsweFAlwOlgC6WNIspCbL8Ij6A/lights/26/state',
                data: JSON.stringify ({
                    hue:gravko
                }),
                success: function(data) { console.log("data blev sendt") },
                contentType: "application/json",
                dataType: 'json'
            });
        }


