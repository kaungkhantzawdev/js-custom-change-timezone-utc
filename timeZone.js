const timeZones = [
    {
    "id": 1,
    "gmt": "-12.00",
    "name": "(GMT-12:00)-International Date Line West"
    },
    {
    "id": 2,
    "gmt": "-11.00",
    "name": "(GMT-11:00)-Midway Island, Samoa"
    },
    {
    "id": 3,
    "gmt": "-10.00",
    "name": "(GMT-10:00)-Hawaii"
    },
    {
    "id": 4,
    "gmt": "-9.00",
    "name": "(GMT-09:00)-Alaska"
    },
    {
    "id": 5,
    "gmt": "-8.00",
    "name": "(GMT-08:00)-Pacific Time (US & Canada); Tijuana"
    },
    {
    "id": 6,
    "gmt": "-7.00",
    "name": "(GMT-07:00)-Arizona"
    },
    {
    "id": 7,
    "gmt": "-7.00",
    "name": "(GMT-07:00)-Chihuahua, La Paz, Mazatlan"
    },
    {
    "id": 8,
    "gmt": "-7.00",
    "name": "(GMT-07:00)-Mountain Time (US & Canada)"
    },
    {
    "id": 9,
    "gmt": "-6.00",
    "name": "(GMT-06:00)-Central America"
    },
    {
    "id": 10,
    "gmt": "-6.00",
    "name": "(GMT-06:00)-Central Time (US & Canada)"
    },
    {
    "id": 11,
    "gmt": "-6.00",
    "name": "(GMT-06:00)-Guadalajara, Mexico City, Monterrey"
    },
    {
    "id": 12,
    "gmt": "-6.00",
    "name": "(GMT-06:00)-Saskatchewan"
    },
    {
    "id": 13,
    "gmt": "-5.00",
    "name": "(GMT-05:00)-Bogota, Lima, Quito"
    },
    {
    "id": 14,
    "gmt": "-5.00",
    "name": "(GMT-05:00)-Eastern Time (US & Canada)"
    },
    {
    "id": 15,
    "gmt": "-5.00",
    "name": "(GMT-05:00)-Indiana (East)"
    },
    {
    "id": 16,
    "gmt": "-4.00",
    "name": "(GMT-04:00)-Atlantic Time (Canada)"
    },
    {
    "id": 17,
    "gmt": "-4.00",
    "name": "(GMT-04:00)-Caracas, La Paz"
    },
    {
    "id": 18,
    "gmt": "-4.00",
    "name": "(GMT-04:00)-Santiago"
    },
    {
    "id": 19,
    "gmt": "-3.50",
    "name": "(GMT-03:30)-Newfoundland"
    },
    {
    "id": 20,
    "gmt": "-3.00",
    "name": "(GMT-03:00)-Brasilia"
    },
    {
    "id": 21,
    "gmt": "-3.00",
    "name": "(GMT-03:00)-Buenos Aires, Georgetown"
    },
    {
    "id": 22,
    "gmt": "-3.00",
    "name": "(GMT-03:00)-Greenland"
    },
    {
    "id": 23,
    "gmt": "-2.00",
    "name": "(GMT-02:00)-Mid-Atlantic"
    },
    {
    "id": 24,
    "gmt": "-1.00",
    "name": "(GMT-01:00)-Azores"
    },
    {
    "id": 25,
    "gmt": "-1.00",
    "name": "(GMT-01:00)-Cape Verde Is."
    },
    {
    "id": 26,
    "gmt": "0.00",
    "name": "(GMT)-Casablanca, Monrovia"
    },
    {
    "id": 27,
    "gmt": "0.00",
    "name": "(GMT)-Greenwich Mean Time: Dublin, Edinburgh, Lisbon, London"
    },
    {
    "id": 28,
    "gmt": "1.00",
    "name": "(GMT+01:00)-Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"
    },
    {
    "id": 29,
    "gmt": "1.00",
    "name": "(GMT+01:00)-Belgrade, Bratislava, Budapest, Ljubljana, Prague"
    },
    {
    "id": 30,
    "gmt": "1.00",
    "name": "(GMT+01:00)-Brussels, Copenhagen, Madrid, Paris"
    },
    {
    "id": 31,
    "gmt": "1.00",
    "name": "(GMT+01:00)-Sarajevo, Skopje, Warsaw, Zagreb"
    },
    {
    "id": 32,
    "gmt": "1.00",
    "name": "(GMT+01:00)-West Central Africa"
    },
    {
    "id": 33,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Athens, Beirut, Istanbul, Minsk"
    },
    {
    "id": 34,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Bucharest"
    },
    {
    "id": 35,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Cairo"
    },
    {
    "id": 36,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Harare, Pretoria"
    },
    {
    "id": 37,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"
    },
    {
    "id": 38,
    "gmt": "2.00",
    "name": "(GMT+02:00)-Jerusalem"
    },
    {
    "id": 39,
    "gmt": "3.00",
    "name": "(GMT+03:00)-Baghdad"
    },
    {
    "id": 40,
    "gmt": "3.00",
    "name": "(GMT+03:00)-Kuwait, Riyadh"
    },
    {
    "id": 41,
    "gmt": "3.00",
    "name": "(GMT+03:00)-Moscow, St. Petersburg, Volgograd"
    },
    {
    "id": 42,
    "gmt": "3.00",
    "name": "(GMT+03:00)-Nairobi"
    },
    {
    "id": 43,
    "gmt": "3.50",
    "name": "(GMT+03:30)-Tehran"
    },
    {
    "id": 44,
    "gmt": "4.00",
    "name": "(GMT+04:00)-Abu Dhabi, Muscat"
    },
    {
    "id": 45,
    "gmt": "4.00",
    "name": "(GMT+04:00)-Baku, Tbilisi, Yerevan"
    },
    {
    "id": 46,
    "gmt": "4.50",
    "name": "(GMT+04:30)-Kabul"
    },
    {
    "id": 47,
    "gmt": "5.00",
    "name": "(GMT+05:00)-Ekaterinburg"
    },
    {
    "id": 48,
    "gmt": "5.00",
    "name": "(GMT+05:00)-Islamabad, Karachi, Tashkent"
    },
    {
    "id": 49,
    "gmt": "5.50",
    "name": "(GMT+05:30)-Chennai, Kolkata, Mumbai, New Delhi"
    },
    {
    "id": 50,
    "gmt": "5.75",
    "name": "(GMT+05:45)-Kathmandu"
    },
    {
    "id": 51,
    "gmt": "6.00",
    "name": "(GMT+06:00)-Almaty, Novosibirsk"
    },
    {
    "id": 52,
    "gmt": "6.00",
    "name": "(GMT+06:00)-Astana, Dhaka"
    },
    {
    "id": 53,
    "gmt": "6.00",
    "name": "(GMT+06:00)-Sri Jayawardenepura"
    },
    {
    "id": 54,
    "gmt": "6.50",
    "name": "(GMT+06:30)-Rangoon"
    },
    {
    "id": 55,
    "gmt": "7.00",
    "name": "(GMT+07:00)-Bangkok, Hanoi, Jakarta"
    },
    {
    "id": 56,
    "gmt": "7.00",
    "name": "(GMT+07:00)-Krasnoyarsk"
    },
    {
    "id": 57,
    "gmt": "8.00",
    "name": "(GMT+08:00)-Beijing, Chongqing, Hong Kong, Urumqi"
    },
    {
    "id": 58,
    "gmt": "8.00",
    "name": "(GMT+08:00)-Irkutsk, Ulaan Bataar"
    },
    {
    "id": 59,
    "gmt": "8.00",
    "name": "(GMT+08:00)-Kuala Lumpur, Singapore"
    },
    {
    "id": 60,
    "gmt": "8.00",
    "name": "(GMT+08:00)-Perth"
    },
    {
    "id": 61,
    "gmt": "8.00",
    "name": "(GMT+08:00)-Taipei"
    },
    {
    "id": 62,
    "gmt": "9.00",
    "name": "(GMT+09:00)-Osaka, Sapporo, Tokyo"
    },
    {
    "id": 63,
    "gmt": "9.00",
    "name": "(GMT+09:00)-Seoul"
    },
    {
    "id": 64,
    "gmt": "9.00",
    "name": "(GMT+09:00)-Vakutsk"
    },
    {
    "id": 65,
    "gmt": "9.50",
    "name": "(GMT+09:30)-Adelaide"
    },
    {
    "id": 66,
    "gmt": "9.50",
    "name": "(GMT+09:30)-Darwin"
    },
    {
    "id": 67,
    "gmt": "10.00",
    "name": "(GMT+10:00)-Brisbane"
    },
    {
    "id": 68,
    "gmt": "10.00",
    "name": "(GMT+10:00)-Canberra, Melbourne, Sydney"
    },
    {
    "id": 69,
    "gmt": "10.00",
    "name": "(GMT+10:00)-Guam, Port Moresby"
    },
    {
    "id": 70,
    "gmt": "10.00",
    "name": "(GMT+10:00)-Hobart"
    },
    {
    "id": 71,
    "gmt": "10.00",
    "name": "(GMT+10:00)-Vladivostok"
    },
    {
    "id": 72,
    "gmt": "11.00",
    "name": "(GMT+11:00)-Magadan, Solomon Is., New Caledonia"
    },
    {
    "id": 73,
    "gmt": "12.00",
    "name": "(GMT+12:00)-Auckland, Wellington"
    },
    {
    "id": 74,
    "gmt": "12.00",
    "name": "(GMT+12:00)-Fiji, Kamchatka, Marshall Is."
    },
    {
    "id": 75,
    "gmt": "13.00",
    "name": "(GMT+13:00)-Nuku'alofa"
    }
    ]

export default timeZones;