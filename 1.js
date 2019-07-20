function biodata() {
	var data = {
		nama: "Resha Puspita Dewi",
		age: 21,
		address: "Jalan Cipamokolan 19 RT 07/08 Bandung, 40292",
		hobbies: ["Baca buku self-improvement, novel psychology, dan novel klasik",
				"Mendengarkan musik indie",
				"Menonton orang naik gunung", 
				"Bermain game strategy"],
		is_married: false,
		list_school: [{name: "SD Negeri Cipamokolan 1",
						year_in: 2004,
						year_out: 2005,
						major: null},
					{name: "SDN Andir Kidul",
						year_in: 2005,
						year_out: 2005,
						major: null},
					{name: "SD Negeri Kampung Sawah 02",
						year_in: 2006,
						year_out: 2006,
						major: null},
					{name: "SDN Cipicung 02",
						year_in: 2007,
						year_out: 2008,
						major: null},
					{name: "SDN Rancaloa",
						year_in: 2008,
						year_out: 2010,
						major: null},
					{name: "SMP Negeri 30 Bandung",
						year_in: 2010,
						year_out: 2013,
						major: null},
					{name: "SMA Negeri 24 Bandung",
						year_in: 2013,
						year_out: 2016,
						major: "MIA/IPA"},,
					{name: "Institut Tekonologi Bandung",
						year_in: 2017,
						year_out: 2022,
						major: "Sistem dan Teknologi Informasi"}
					],
		skills: [{skill_name: "Java",
				level: "advanced"},
				{skill_name: "Javascript",
				level: "advanced"}
				{skill_name: "C++",
				level: "advanced"}
				{skill_name: "Python 3",
				level: "beginner"}],
		interest_in_coding: true
	}

	var data_json = JSON.stringify(data);
	return data_json;
}