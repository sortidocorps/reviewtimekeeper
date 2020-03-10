export class Timer {
    
    private _minutes: number = 0;
    public seconde: number = 0;
    private _totalSecondes: number = 0;
    private _timer;

    get minutes(): number { return this._minutes; }

    get secondes(): number { return this.seconde; }

    start() {
      this._timer = setInterval(() => {
        this._minutes = Math.floor(++this._totalSecondes / 60);
        this.seconde = this._totalSecondes - this._minutes * 60;
      }, 1000);
    }

    stop() {
      clearInterval(this._timer);
    }

    reset() {
      this._totalSecondes = this._minutes = this.seconde = 0;
    }

  }