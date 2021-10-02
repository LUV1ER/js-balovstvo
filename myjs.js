document.getElementById('output1','output2','output3').innerHTML = '';

function fibonacci(){
	document.getElementById('output1').innerHTML = '';
	let num1 = 0;
	let num2 = 1;
	let buff;
	let userNum = document.getElementById('input1').value;
	let myArray = [0,1];
	if (userNum==1)
		document.getElementById('output1').innerHTML += "0";
	if (userNum!=1)
	{
		for (let i=2; i<userNum; ++i)
		{
			buff = num1+num2;
			num1 = num2;
			num2 = buff;
			myArray.push(buff);
		}
			document.getElementById('output1').innerHTML = myArray;
	}
}

function lift(){
	document.getElementById('output2').innerHTML = '';
	let flat = document.getElementById('input2').value;
	let floor = Math.floor (flat/3);
	let checkFloor = floor%2;
	let rest = flat%3;
	if (rest !=0)
		floor ++;
	if (checkFloor!=0)
	{
		floor--;
		document.getElementById('output2').innerHTML = "От халепа! Ліфт піднявся лише до "+floor+ " поверху. Шукайте квартиру на наступному. Ходити пішки корисно)";
	}
	if (checkFloor==0)
		document.getElementById('output2').innerHTML = "Шукайте квартиру на поверсі №" + floor;
}

function rand_Massive(){
	document.getElementById('output3Mass', 'output3Pos', 'output3Neg').innerHTML = '';
	let neg;
	let n = document.getElementById('input3n').value;
	let m = document.getElementById('input3m').value;
	let positive = new Array();
	let negative = new Array();
	let randArray = new Array(m);
	for(let i = 0; i < m; i++){
		randArray[i] = new Array(n);
	}
	for(let row = 0; row < m; row++) {
    	for(let col = 0; col < n; col++) {
    	neg = Math.floor(Math.random() * 10);
    	randArray[row][col] = Math.floor((Math.random() * 100) + 1);
    	if(neg>5)
    	{
    		randArray[row][col] = - randArray[row][col];
    		negative.push(randArray[row][col]);
    	}
     	 if (randArray[row][col]>0)
     	 {
     	 	positive.push(randArray[row][col]);
     	 }
     	 document.getElementById('output3Mass').innerHTML += randArray[row][col] + " ";
  		}
  		document.getElementById('output3Mass').innerHTML += "<br/>";
	}
	document.getElementById('output3Pos').innerHTML = "Масив додатніх чисел: " + positive + "<br/>";
	document.getElementById('output3Neg').innerHTML ="Масив від'ємних' чисел: " + negative;
}

function rozklad(){
	document.getElementById('output4').innerHTML = '';
	class para
	{
		constructor (name,room,day,time,para_Type)
		{
			this.name = name;
			this.room = room;
			this.day = day;
			this.time = time;
			this.para_Type = para_Type;
		}
		add_Groups(){
			this.groups = new Array (3);
		}
		group_Massive (){
			switch (this.para_Type){
				case "pract": 
					this.groups.push("IK-92");
					break;
				case "lection":
					this.groups.push("IK-91");
					this.groups.push("IK-92");
					this.groups.push("IK-93");
					break;
				default:
					this.groups.push("Щось не так");
			}
		}
		get_Groups(){
			return this.groups;
		}
		get_Day(){
			return this.day;
		}
	}

	pairs = new Array (19);

	//Понеділок
	let KE_Lection = new para ("Комп'ютерна електроніка",418,"Понеділок",8.30,"lection");
	KE_Lection.add_Groups();
	KE_Lection.group_Massive();
	pairs [0] = KE_Lection;
	let IOT_Lection = new para ("Технології інтернету речей",419,"Понеділок",10.25,"lection");
	IOT_Lection.add_Groups();
	IOT_Lection.group_Massive();
	pairs [1] = IOT_Lection;
	let EBI = new para ("Екологічна безпека інженерної діяльності",302,"Понеділок",14.15,"lection");
	EBI.add_Groups();
	EBI.group_Massive();
	pairs[2] = EBI;
	let EKJ = new para ("Екологічні аспекти керування якістю навколишнього середовища",204,"Понеділок",14.15,"pract");
	EKJ.add_Groups();
	EKJ.group_Massive ();
	pairs [3] = EKJ;
	let EPT = new para ("Екологічна та природо-техногенна безпека",303,"Понеділок",14.15,"lection");
	EPT.add_Groups();
	EPT.group_Massive();
	pairs [4] = EPT;
	let Java_Lab = new para ("Основи розробки ПЗ на платформі Java"," - ","Понеділок",16.10,"pract");
	Java_Lab.add_Groups();
	Java_Lab.group_Massive();
	pairs[5] = Java_Lab;


	//Вівторок
	let KE_Lab = new para ("Комп'ютерна електроніка","418а","Вівторок",8.30, "pract");
	KE_Lab.add_Groups();
	KE_Lab.group_Massive();
	pairs [6] = KE_Lab;
	let IOT_Lab = new para ("Технології інтернету речей",415,"Вівторок",10.25,"pract");
	IOT_Lab.add_Groups();
	IOT_Lab.group_Massive();
	pairs[7] = IOT_Lab;
	let TIMS_Lection = new para ("ТІМС",419,"Вівторок",14.15,"lection");
	TIMS_Lection.add_Groups();
	TIMS_Lection.group_Massive();
	pairs[8]=TIMS_Lection;

	//Середа
	let PTC = new para ("РТС 1 проект. компонентів", 432, "Середа", 8.30, "lection");
	PTC.add_Groups();
	PTC.group_Massive();
	pairs[9] = PTC;
	let AKS = new para ("Архітектура комп'ютерних систем", 419, "Середа", 20.25, "lection");
	AKS.add_Groups();
	AKS.group_Massive();
	pairs[10]=AKS;
	let FP = new para ("Фізичне виховання", "   ", "Середа", 12.20, "lection");
	FP.add_Groups();
	FP.group_Massive();
	pairs[11]=FP;

	//Четвер
	let NET_Lab = new para ("Основи розробки ПЗ на платформі .NET"," - ","Четвер",8.30,"pract");
	NET_Lab.add_Groups();
	NET_Lab.group_Massive();
	pairs[12] = NET_Lab;
	let Node_Lab = new para ("Основи розробки ПЗ на платформі Node.JS", 415, "Четвер", 8.30,"pract");
	Node_Lab.add_Groups();
	Node_Lab.group_Massive();
	pairs [13] = Node_Lab;
	let Java_Lection = new para ("Основи розробки ПЗ на платформі Java",438, "Четвер", 10.25 ,"lection");
	Java_Lection.add_Groups();
	Java_Lection.group_Massive();
	pairs[14] = Java_Lection;
	let NET_Lection = new para ("Основи розробки ПЗ на платформі .NET"," - ","Четвер",10.25,"lection");
	NET_Lection.add_Groups();
	NET_Lection.group_Massive();
	pairs [15] = NET_Lection;
	let Node_Lection = new para ("Основи розробки ПЗ на платформі Node.JS"," - ","Четвер",10.25,"lection");
	Node_Lection.add_Groups();
	Node_Lection.group_Massive();
	pairs [16] = Node_Lection;
	let TIMS_Lab = new para ("ТІМС",413, "Четвер",12.20, "pract");
	TIMS_Lab.add_Groups();
	TIMS_Lab.group_Massive();
	pairs [17] = TIMS_Lab;
	let English = new para ("Ін.мова 2",411,"Четвер",14.15,"pract");
	English.add_Groups();
	English.group_Massive();
	pairs[18] = English;

	let group_ID = document.getElementById('input4Group').value;
	let date_str = document.getElementById('input4Data').value;


	function whatDay(date_str){
			let date_num = new Date(date_str);
			let weekday_num = date_num.getDay();
			let weekday_str;

			switch (weekday_num)
			{
				case 0:
					weekday_str = "Неділя";
					break;
				case 1:
					weekday_str = "Понеділок";
					break;
				case 2:
					weekday_str = "Вівторок";
					break;
				case 3:
					weekday_str = "Середа";
					break;
				case 4:
					weekday_str = "Четвер";
					break;
				case 5:
					weekday_str = "П'ятниця";
					break;
				case 6:
					weekday_str = "Субота";
					break;
				default:
					weekday_str = "Десь проблема";
			}
			return weekday_str;
		}

	for (let i = 0; i<18; i++)
	{
		if (pairs[i].day == whatDay(date_str))
		{
				if (pairs[i].groups = group_ID)
				{
					document.getElementById('output4').innerHTML += pairs[i].name + '\t'+ pairs[i].room + '\t' +pairs[i].time + "<br/>";
					document.getElementById('output3Mass').innerHTML += "<br/>";
				}
		}

	}
	if (document.getElementById('output4').innerHTML == '')
	{
		document.getElementById('output4').innerHTML = "Немає пар в цей день";
	}
	
	
}

function calculator (){
	document.getElementById('output5').innerHTML = '';
	let firstNum = document.getElementById('input5First').value;
	let secondNum = document.getElementById('input5Second').value;
	let result;
	let act = document.getElementsByName('action');
	for (var i = 0; i<act.length;i++){
		if (act[i].checked){
			switch (i){
			case 0:
				result = Number(firstNum) + Number(secondNum);
				break;
			case 1:
				result = firstNum - secondNum;
				break;
			case 2:
				result = firstNum * secondNum;
				break;
			case 3:
				result = firstNum / secondNum;
				break;
			}
		}
	}
	document.getElementById('output5').innerHTML = "Результат: "+ result;
}

document.getElementById('output6').innerHTML = '';	
	let general = new Array ();
 function addGood(){
 	let newName = document.getElementById('input6Name').value;
	let newPrice = document.getElementById('input6Price').value;
	let newAmount = document.getElementById('input6Amount').value;
	let goodPrice = Number(newPrice) * Number(newAmount);
	let newGood = {
		name : newName,
		price : newPrice,
		amount : newAmount,
		myPrice : goodPrice
	};
	document.getElementById('input6Name').innerHTML = '';
	document.getElementById('input6Price').innerHTML = '';
	document.getElementById('input6Amount').innerHTML = '';
	document.getElementById('output6').innerHTML = 'Товар додано!';
	general.push(newGood);
 }


function show (){
	let totalPrice = 0;
	document.getElementById('output6').innerHTML = "Ваш Кошик:"+"</br>";
	document.getElementById('output6').innerHTML += "Товар"+" "+"Кількість"+" "+"Ціна"+"</br>";
	for (let i=0;i<general.length; i++){
		totalPrice = Number(totalPrice) + Number(general[i].myPrice);
		document.getElementById('output6').innerHTML += general[i].name + ' '+general[i].price +' '+general[i].amount;
		document.getElementById('output6').innerHTML += "</br>";
	}
	document.getElementById('output6').innerHTML += "Загальна сума: " + totalPrice;
}

function ind_Massive(){
	document.getElementById('output7Mass', 'output7Pos', 'output7Neg').innerHTML = '';
	let neg;
	let neg_Rows = new Array();
	let neg_Calc = 0;
	let pos_Sum = new Array();
	let pos_El = 0;
	let n = document.getElementById('input7n').value;
	let m = document.getElementById('input7m').value;
	let positive = new Array();
	let negative = new Array();
	let randArray = new Array(m);
	for(let i = 0; i < m; i++){
		randArray[i] = new Array(n);
	}
	for(let row = 0; row < m; row++) {
		pos_El = 0;
    	for(let col = 0; col < n; col++) {
    	neg = Math.floor(Math.random() * 10);
    	randArray[row][col] = Math.floor((Math.random() * 10) + 1);
    	if(neg>5)
    	{
    		randArray[row][col] = - randArray[row][col];
    		negative.push(randArray[row][col]);
    	}
     	 if (randArray[row][col]>0)
     	 {
     	 	positive.push(randArray[row][col]);
     	 	pos_El +=  randArray[row][col];
     	 }
     	 
     	 document.getElementById('output7Mass').innerHTML += randArray[row][col] + " ";
     	 
  		}
  		pos_Sum.push(pos_El);
  		document.getElementById('output7Mass').innerHTML += "<br/>";
	}
for (let l = 0;l<n;l++){
	neg_Calc = 0;
	for (let k=0;k<m;k++){
		if (randArray[k][l] < 0){
			neg_Calc++;
		}
	}
	neg_Rows.push(neg_Calc);
}
	



	document.getElementById('output7Pos').innerHTML = "Масив суми додатніх елементів по рядках: " + pos_Sum + "<br/>";
	document.getElementById('output7Neg').innerHTML ="Масив кількості від'ємних' елементів за стовпцями: " + neg_Rows;

}