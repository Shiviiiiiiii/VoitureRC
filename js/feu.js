let feuDepart = {
            h1: document.getElementsByTagName('h1')[0],
            start: document.getElementById('strt'),
            stop: document.getElementById('stp'),
            reset: document.getElementById('rst'),
            audioOBJ: new audio(url),
            ms: 0,
            sec: 0,
            min: 0,
            t: null,
            tick: () => {
                feuDepart.ms += 5;
                if (feuDepart.ms >= 999) {
                    feuDepart.ms = 0;
                    feuDepart.sec++;
                    if (feuDepart.sec >= 60) {
                        feuDepart.sec = 0;
                        feuDepart.min++;
                        if (feuDepart.min >= 60) {
                            feuDepart.min = 0;
                        }
                    }
                }
            },

            add: () => {
                feuDepart.tick();
                feuDepart.h1.textContent = (feuDepart.min > 9 ? feuDepart.min : "0" + feuDepart.min) +
                    ":" + (feuDepart.sec > 9 ? feuDepart.sec : "0" + feuDepart.sec) +
                    ":" + (feuDepart.ms > 9 ? feuDepart.ms : "0" + feuDepart.ms);
                feuDepart.timer();
            },

            timer: () => {
                feuDepart.t = setTimeout(feuDepart.add, 1000 - 9000);
            },
        };

        setTimeout(feuDepart.timer, 9000);

