class App {

    enable_events() {
        document.getElementsByClassName("task-button")[0].addEventListener("mouseover", ()=>{
            let btn = document.getElementsByClassName("icon")[0];
            btn.src = 'assets/icons/dark/send.png'

        });

        document.getElementsByClassName("task-button")[0].addEventListener("mouseout", ()=>{
            let btn = document.getElementsByClassName("icon")[0];
            btn.src = 'assets/icons/light/send.png'
        });
    }

    start() {
        this.enable_events();
    }
}

let app = new App();
app.start();