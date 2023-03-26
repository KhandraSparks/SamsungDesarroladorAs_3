(() => {
    //Modo tradicional
      class Avenger {
    
    
      constructor(name: string, team: string, realName: string) {
        this.name = name
        this.team = team
        this.realName = realName
      }
        private name: string;
        public team: string;
        public realName: string;
    
      }
    
      const miHeroe:Avenger = new Avenger("Batman", "Avengers", "Manolo");
      console.log(miHeroe);
    
      //Modo actual
      class Avenger2 {
    
    
        constructor(private name: string, public team: string, public realName: string) {
        }
      }
      
        const miHeroe2:Avenger2 = new Avenger2("Superman", "Avengers", "Clark");
        console.log(miHeroe2);
    })()