import styleColor from "./color";

import welcome from "./weclome.js";

const loading = () => {



    const loadingTime = 4;
    let waveContainer = new Layer({
        backgroundColor: styleColor('#FF91BD'),
        opacity: 1,
        x: Align.center,
        y: -Screen.height * 9 / 10,
        width: 1000,
        borderRadius: "35%",
        height: 1000,
    });
    /*

    let word = new Layer({
    	backgroundColor:styleColor('transparent'),
    	width:Screen.width,
    	height:700,
    	x: Align.center,
    	y:Screen.height - 160,

    })
    word.html = "INVITATION"
    word.style={
    	color:styleColor("#fff"),
    	textAlign:"center",
    	fontSize:"30px",
    };
    let wordsub = new Layer({
    	backgroundColor:styleColor('transparent'),
    	width:Screen.width,
    	height:700,
    	x: Align.center,
    	y:Screen.height - 100,

    })
    wordsub.html = "Hi I have some dribbble invitation"
    wordsub.style={
    	color:styleColor("#fff"),
    	textAlign:"center",
    	fontSize:"20px",
    };
    */

    let dropInwater = new Layer({
        borderRadius: 30,
        backgroundColor: "#fff",
        x: Align.center,
        y: 440,
        width: 60,
        height: 0,

    })

    let dialog = new Layer({

        width: 308,
        height: 345,
        borderRadius: 6,
        x: Align.center,
        y: 140,
        image: "./images/dialog.png",

    })
    let dribbbleContainer = new Layer({
        backgroundColor: styleColor('rgba(255,255,255,.9)'),
        x: Align.center,
        width: 88,
        height: 88,
        y: 96,
        borderRadius: "50%",
    })

    let dribbble = new Layer({
        backgroundColor: styleColor('dribbbleColor'),
        opacity: 1,
        x: Align.center,
        width: 80,
        height: 80,
        y: 100,
        borderRadius: "50%",

    })
    dribbble.html = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" t="1513052406356" class="icon" style="fill:#FF91BD;transform:scale(1.1)" viewBox="0 0 1024 1024" version="1.1" p-id="1945" width="80" height="80"><defs><style type="text/css"/></defs><path d="M539.625174 339.734588c5.220908 8.650007 10.317996 17.33276 15.312754 26.03905 76.419484-32.006971 149.041478-81.414241 195.389062-157.593248-27.29567-21.883403-57.349149-39.845497-89.780793-53.562916-47.062875-19.905352-97.03808-29.998221-148.536988-29.998221-40.181141 0-79.435167 6.144954-117.101022 18.300808C416.764985 166.780491 477.197356 236.3121 539.625174 339.734588z" p-id="1946"/><path d="M618.502639 404.40447c-10.984169 5.541203-22.325471 10.810207-33.998325 15.815197 10.605545 20.669762 20.578688 41.445948 29.871331 62.291718 89.310072-18.812461 183.148273-11.822257 279.193747 20.800745-0.370437-50.479695-10.447956-99.467409-29.980825-145.651264-16.58063-39.200814-39.344077-74.940806-67.771523-106.511849C754.437611 314.366827 694.857655 365.881085 618.502639 404.40447z" p-id="1947"/><path d="M487.927745 372.903012c-72.934103-121.180943-144.734382-195.411575-145.45172-196.147332 0 0-5.728468-5.302773-8.214079-8.276501-33.842783 17.813714-64.72207 40.553625-92.069929 67.901483-35.033911 35.033911-62.542428 75.838246-81.762165 121.280204-8.991792 21.258163-15.97381 43.112913-20.934798 65.432245 29.03836 2.209318 131.2206 7.851828 246.426459-10.673084 34.471093-5.54325 72.17174-13.642718 110.349247-25.441439C493.468948 382.183376 490.684532 377.484354 487.927745 372.903012z" p-id="1948"/><path d="M883.654578 564.780087l-0.029676 0.081864c-85.445044-30.679743-167.420057-38.895869-245.339708-24.76094 3.540639 9.203616 6.956436 18.411325 10.229992 27.621081 31.801287 89.469708 50.943252 179.322132 57.009412 267.407306 27.709085-16.313547 53.260018-36.075637 76.30078-59.115376 35.032888-35.033911 62.542428-75.838246 81.762165-121.280204 12.113899-28.640294 20.573571-58.362222 25.354458-88.847537C887.572818 565.638641 884.004549 564.939723 883.654578 564.780087z" p-id="1949"/><path d="M393.856229 589.266781c50.610678-40.271192 104.427374-70.416769 160.563906-90.025363-9.109472-20.070104-18.463514-39.203884-27.849278-57.294914-40.900525 13.320377-85.126796 23.801079-132.332934 31.322379-68.883857 10.975982-132.527362 13.887288-180.638103 13.887288-40.665165 0-70.231551-2.078335-82.533738-3.124154-0.418532 7.354502-0.635473 14.743796-0.635473 22.165836 0 51.499931 10.092869 101.474113 29.999245 148.536988 17.860786 42.227754 42.888809 80.443124 74.452689 113.752764C257.594823 731.812311 310.597991 655.516648 393.856229 589.266781z" p-id="1950"/><path d="M645.363404 858.178347c-5.129834-110.954021-32.425504-213.888392-67.097164-302.492382-50.66696 17.2335-99.453083 44.445258-146.180314 81.626066-84.507696 67.24452-135.38955 146.964166-150.673651 172.933631 25.212218 19.168572 52.658314 35.095309 82.059947 47.53155 47.062875 19.905352 97.03808 29.998221 148.536988 29.998221 46.158273 0 91.091648-8.114818 133.802402-24.12956C645.813658 863.334787 645.168975 858.916151 645.363404 858.178347z" p-id="1951"/></svg>'



    let animation1setting = {
        rotation: 360,
        options: {
            time: loadingTime,
            curve: Bezier.linear,
            repeat: 9999999999,
        }
    };
    let animation1 = new Animation(waveContainer, animation1setting)




    waveContainer.draggable.horizontal = false;


    const dropInwaterAnimation = () => {
        dropInwater.animate({

            height: 100,
            options: {
                time: .5,
                curve: Bezier.easeIn,
            }
        })
    }

    const loadingUp = () => {
        waveContainer.animate({
            y: -1200,
            options: {
                time: 4,
                curve: Bezier.easeIn,
            }
        })
    }



    const dribbbleDown = () => {
        dribbble.animate({
            y: 480,
            options: {
                time: .8,
                curve: Bezier.easeIn,
            }
        })
    }

    const dribbbleInwater = () => {
        dribbble.animate({
            y: 660,
            backgroundColor: '#fff',
            opacity: 0,
            scale: 4,
            options: {
                time: 1,
                curve: Bezier.easeOut,
            }
        })
    }


    const dialogfun = () => {



        dribbbleContainer.animate({
            opacity: 0,
            options: {
                time: .5,
                curve: Bezier.easeOut,
            }

        });

        setTimeout(() => {
            dialog.animate({
                opacity: 0,
                scale: 10,
                options: {
                    time: .5,
                    curve: Bezier.easeOut,
                }
            })
        }, 300)

    }


    animation1.start();


    dialog.on(Events.Tap, () => {
        dialogfun();


        setTimeout(() => {

            dribbbleDown();

            setTimeout(() => {

                dribbbleInwater();
                setTimeout(() => {
                loadingUp();

                 setTimeout(()=>{
                 	welcome();
                 },2000 )

                }, 500)
            }, 800)

        }, 1000)



    });




}

export default loading