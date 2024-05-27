
const data = 
`[
  {
    "id": 1,
    "name": "2C19-Msta",
    "caliber":"152mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"19km",
            "projectile_weight":"43kg",
            "explosive_weight":"7.6kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"29km",
            "projectile_weight":"43kg",
            "explosive_weight":"7.8kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"Krasnopol",
            "firing_range":"?km"
        }
    ],
    "highway_speed":"60kmh",
    "radius_of_action":"250km",
    "manufacturer":"Russia",
    "img":"img/2C19-Msta.jpg"
  },
  {
    "id": 2,
    "name": "2C35-Koalicia",
    "caliber":"152mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"?km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"40km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"Krasnopol",
            "firing_range":"?km"
        }
    ],
    "highway_speed":"60kmh",
    "radius_of_action":"400km",
    "manufacturer":"Russia",
    "img":"img/2C35-Koalicia.jpg"

  },
  {
    "id": 3,
    "name": "AHS-krab",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"?km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"40km"
        }
    ],
    "highway_speed":"60kmh",
    "radius_of_action":"200km",
    "manufacturer":"Poland",
    "img":"img/AHS-krab2.png"
  },
  {
    "id": 4,
    "name": "2C3-Akacia",
    "caliber":"152mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"19km",
            "projectile_weight":"43kg",
            "explosive_weight":"7.6kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"25km",
            "projectile_weight":"43kg",
            "explosive_weight":"7.8kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"Krasnopol",
            "firing_range":"?km"
        }
    ],
    "highway_speed":"60kmh",
    "radius_of_action":"250km",
    "manufacturer":"Russia",
    "img":"img/akacia.jpg"

  },
  {
    "id": 5,
    "name": "Archer",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"40km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"60km"
        }
    ],
    "highway_speed":"70kmh",
    "radius_of_action":"250km",
    "manufacturer":"Sweden",
    "img":"img/Archer.jpg"

  },
  {
    "id": 6,
    "name": "2C7-Pion",
    "caliber":"203mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"37km",
            "projectile_weight":"110kg",
            "explosive_weight":"18kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"47.5km",
            "projectile_weight":"102kg",
            "explosive_weight":"13kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"none",
            "firing_range":"-"
        }
    ],
    "highway_speed":"50kmh",
    "radius_of_action":"340km",
    "manufacturer":"Russia",
    "img":"img/pion.jpg"

  },
  {
    "id": 7,
    "name": "AMX-30",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"23km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"?km"
        }
    ],
    "highway_speed":"60kmh",
    "radius_of_action":"220km",
    "manufacturer":"France",
    "img":"img/SAU-AUF1-1.jpg"

  },
  {
    "id": 8,
    "name": "AS-90",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"24km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"?km"
        }
    ],
    "highway_speed":"55kmh",
    "radius_of_action":"190km",
    "manufacturer":"United Kingdom",
    "img":"img/AS-90.jpg"
  },

  {
    "id": 9,
    "name": "Ceaser",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"?km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"41-54km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"49km"
        }
    ],
    "highway_speed":"80kmh",
    "radius_of_action":"300km",
    "manufacturer":"France",
    "img":"img/caeser.jpg"
  },

  {
    "id": 10,
    "name": "PzH-2000",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"54-67km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"48km"
        }
    ],
    "highway_speed":"67kmh",
    "radius_of_action":"210km",
    "manufacturer":"Germany",
    "img":"img/PzH_2000.jpg"
  },

  {
    "id": 11,
    "name": "M109-Paladin",
    "caliber":"155mm",
    "ammunition":
    [
        {
            "name":"high-explosive fragmentation simple",
            "firing_range":"21km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        },
        {
            "name":"high-explosive fragmentation with gas generator",
            "firing_range":"30km",
            "projectile_weight":"?kg",
            "explosive_weight":"?kg"
        }
    ],
    "precision_guided_ammunition":
    [
        {
            "name":"M982 Excalibur",
            "firing_range":"40km"
        }
    ],
    "highway_speed":"56kmh",
    "radius_of_action":"180km",
    "manufacturer":"United States",
    "img":"img/M109A7.jpg"
  }


 ]`;