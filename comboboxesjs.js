var typeOfIntTech='';
let inCaseWifi = [
    'აირჩიეთ რაიონი','სამტრედიის რაიონი','ვანის რაიონი','წყალტუბოს რაიონი', 'აბაშის რაიონი', 
    'სენაკის რაიონი', 'მარტვილის რაიონი','ხონის რაიონი','ლანჩხუთის რაიონი',
    'ახალციხის რაიონი',"ბაღდათის რაიონი"
];
let inCasefiber=['აირჩიეთ რაიონი','სამტრედიის რაიონი','აბაშის რაიონი','ლანჩხუთის რაიონი'];
//arrays form citys and vilages where you are optical
let regionWithVilagesWifi = [
    {
        city: "სამტრედია",
        villages: [
                    "ქ.სამტრედია","კვირიკე  ","მელაური","მიწაბოგირა",
                    "ნაბაკევი  ","ნაწილოფეთი","ნინუაკუთხე",
                    "ღანირი","ჩხენიში","ჭაგანი","ხიბლარი",
                    "ხუნჯულაური",
                    "ახალსოფელი","ბაში","ბუღნარა","გვიმრალა","გომმუხაყრუა","გომნატეხები",
                    "გორმაღალი  ","დაბლაგომი","დაფნარი","დიდი ოფეთი","დიდი ჯიხაიში",
                    "დობირო","ვაზისუბანი  ","ზედა ეწერი  ","ზემო აბაშა","ზემო ნოღა",
                    "თხილაგანი  ","იანეთი  ","კეთილაური","კეჭინარი","კორმაღალი",
                    "მთისძირი  ","მტერჩვეული","ნაწილოფეთი",
                    "ნიგორზღვა","ოჭოფა","პატარა ეწერი","პატარა ოფეთი","საჯავახო  ",
                    "ტოლები","ქვაყუდე","ქვედა ეწერი","ქვემო აბაშა","ქვემო ნოღა",
                    "ცივწყალა","წიაღუბანი","ჯიქთუბანი"
                ]
    },
    {
        city: "სენაკი",
        villages: [
                    "ქ.სენაკი","ახალსოფელი  ","ბათარია","ბეთლემი","გახომელა","გეჯეთი","გოლასკური",
                    "დიდი ხორში","ეკი","ეწერი","ზანა","ზედა ნაქალაქევი","ზედა სორტა","თეკლათი",
                    "ისულა","კვაუთი","კოტიანეთი","ლებაღათურე","ლეგოგიე","ლეგოგიე-ნასაჯუ","ლეკოკაიე",
                    "ლესაჯაიე","ლეძაძამე","მეორე მოხაში","მოხაში","მუხური","ნოსირი","პატარა ზანა","პერტული",
                    "პირველი ნოსირი","რეკა","საადამიო","საადანაიო","საბესელიო","საგაბესკირიო","საგვარამიო",
                    "საგუგუნავო","საესებუო","საკილასონიო","საოდიშარიო","სატყებუჩავო"
        ]
    },
    {
        city: "ვანი",
        villages: [
                    "ქ.ვანი","ამაღლება","ბაგინეთი","გადიდი","დიხაშხო","დუცხუნი","ზედა ბზვანი","ზედა გორა",
                    "ზედა ეწერ-ტობანიერი","ზედა ვანი","ზედა მუქედი","ზეინდარი","ზენობანი  ","იმერუხუთი",
                    "ინაშაური","ისრითი","კუშუბაური","მაისაური","მთისძირი  ","მიქელეფონი","ონჯოხეთი",
                    "რომანეთი","სალომინაო  ","სალხინო  ","საპრასია","სულორი  ","ტობანიერი","ტყელვანი",
                    "უხუთი"  
        ]
    },
    {
        city: "წყალტუბო",
        villages: [
                    "ბანოჯა","ბენთქოულა","ბესიაური","ბიღა","ბუნიკაური","გეგუთი","გვიშტიბი",
                    "დღნორისა","ვაკევისა","ვანისჭალა","ვაჭევი","ზარათი","ზედაბერეთისა","ზედამესხეთი", 
                    "ზედაონჭეიში","ზედარგანი","ზედაჭალოვანი","თერნალი","კუდოთი","ლეხიდრისთავი", "მაღლაკი", 
                    "მექვენა","მეჩხერი","მიწაწითელი","მუხიანი","ნამოხვანი","ნოღა","ოფურჩხეთი","ოფშკვითი","პატრიკეთი",
                    "პირველიწყალტუბო","ჟონეთი","რიონი","საყულია","საჩხეური","სორმონი","ტყაჩირი","უკანეთი",
                    "ფარცხანაყანევი","ქვედამესხეთი","ქვედაონჭეიში","ქვილიშორი","ქვიტირი","ყუმისთავი","ჩუნეში(წყალტუბოსთემი)",
                    "ცხუნკური","წყალტუბო","ჭაშლეთი",
                    "ჭოლევი","ხომული","ჯიმასტარო"
        ]
    },
    {
        city: "აბაშა",
        villages: [
                    'ქ.აბაშა თავისუფლების ქუჩა',"გეზათი","გუგუნაყათი (მარნის თემი)","გუგუნაყათი (ქოლობნის თემი)",
                    "გულუხეთი","მაიდანი","მარანი (აბაშის მუნიციპალიტეტი)","მარანჭალა",
                    "პატარა გეზათი","სამიქაო","ქოლობანი",
                    "აბაშისპირი","ბულვანი","გამოღმა ზანათი","გამოღმა კოდორი","გაუწყინარი","გაღმა ზანათი",
                    "გაღმა კოდორი","გულეიკარი","ეწერი (აბაშის მუნიციპალიტეტი)","ზანათი","თხმელარი","კეთილარი",
                    "მაცხოვრისკარი","მეორე ეწერი","მეორე ონტოფო","ნაესაკოვო","ნორიო (აბაშის მუნიციპალიტეტი)","ონტოფო",
                    "პირველი ეწერი","პირველი მაისი (აბაშის მუნიციპალიტეტი)","პირველი ონტოფო","საბოკუჩავო","საგვაზავო",
                    "სეფიეთი","სუჯუნა","ტყვირი","ქვიშანჭალა","ცილორი","ძველი აბაშა","ძიგური","წალიკარი","წყემი"
        ]
    },
    {
        city: "მარტვილი",
        villages: [
                    "ქ.მარტვილი","აბედათი","ალერტი","ბანძა","ბობოთი","გაჭედილი","გოდოგანი","დიდი ინჩხური",
                    "დიდი ჭყონი","დობერაზენი","დოშაყე","დღვანა","ეწერი","ვახა","ვედიდკარი","ზემო ნაგვაზავო", 
                    "ზემო ხუნწი", "თამაკონი", "თარგამეული", "კურზუ","ლებაჩე","ლეგულორდავე","ლედგებე",
                    "ლევახანე","ლეკეკელე","ლემიქავე","ლეპატარავე","ლეცავე","ლეციცხვაიე","ლეხაინდრავო","მახათი",
                    "მეორე ბალდა","მეორე გურძემი","მეორე კიწია","მესამე ბალდა","მუხურჩა","ნაგებერავო","ნამიკოლავო მეორე",
                    "ნამიკოლავო პირველი","ნახუნავო","ნახურცილავო","ნაჯახავო","ნობულევი", "ნოღა","ნოჯიხევი",
                    "ონოღია","ორქა","ოჩე","პატარა თამაკონი","პატარა ინჩხური","პატარა ოჩე","პატარა ჟინოთა","პირველი ბალდა",
                    "პირველი გურძემი","პირველი კიწია","ჟინოთა","საბერულავო","სალხინო (მარტვილის მუნიციპალიტეტი)",
                    "სანაჭყებიო","სერგიეთი","სკურდი","სტეფასდაბალი","ტალერი","ქვემო ნაგვაზავო","ქვემო ხუნწი",
                    "წაჩხური","წინაკვერკვე","ჭაბურთა","ჯოლევი"
        ]
    },
    {
        city: "ხონი",
        villages: [
                    "ახალბედისეული","ახალშენი","ბანგვეთი","ბესიაური","გამოღმა ნოღა",
                    "გაღმა ნოღა","გელავერი","გვაზაური","გვაშტიბი","გოჩაჯიხაიში",
                    "დედალაური","დიდი გუბი","დიდი კუხი","ზედა გორდი","ზედა კინჩხა",
                    "ივანდიდი","კინჩხაფერდი","კონტუათი","ლეფილიე","მათხოჯი","ნახახულევი",
                    "ორაგვეთი","პატარა გუბი","პატარა კუხი","პატარა ჯიხაიში","რონდიში",
                    "საწისქვილო","საწულუკიძეო","სუხჩა","უძლოური","ქვედა გორდი","ქვედა კინჩხა",
                    "ქუტირი","ღვედი","შუა გუბი","ჩუნეში","ძეძილეთი","ხარაბაული","ხიდი"  
        ]
    },
    {
        city: "ლანჩხუთი",
        villages: [
                    "არჩეული","აცანა","ახალსოფელი (ლანჩხუთის მუნიციპალიტეტი)","ბაღლები",
                    "გაგური","გვიმბალაური","გრიგოლეთი","გულიანი","ეწერი (ლანჩხუთის მუნიციპალიტეტი)",
                    "ზემო აკეთი","ზემო შუხუთი","ზემო ჩიბათი","კოკათი","კონჭკათი","ლესა",
                    "მამათი","მაჩხვარეთი","მოედანი","ნიგვზიანი","ნიგოითი","ნინოშვილი",
                    "ომფარეთი","ორაგვე","ორმეთი (ლანჩხუთის მუნიციპალიტეტი)","სუფსა",
                    "ტაბანათი","ტელმანი","ქვედა მამათი","ქვემო აკეთი","ქვემო შუხუთი",
                    "ქვემო ჩიბათი","ქვიანი","ღრმაღელე (ლანჩხუთის მუნიციპალიტეტი)",
                    "ყელა","შათირი","შრომისუბანი","ჩანჩეთი","ჩოლაბარგი","ჩოჩხათი",
                    "ჩქუნი","წყალწმინდა","ჭალა","ჭანჭათი","ჭინათი","ჭყონაგორა","ხაჯალია",
                    "ხიდმაღალა","ხორეთი","ჯაპანა","ჯიხანჯირი","ჯიხეთის მონასტერი","ჯუნეწერი",
                    "ჯუნმერე","ჯურუყვეთი"
        ]
    },
    {
        city: "ახალციხე",
        villages: [
                    "აბათხევი","აგარა (ახალციხის მუნიციპალიტეტი)","ანდა",
                    "ანდრიაწმინდა","ანი (ახალციხის მუნიციპალიტეტი)","აწყური (ახალციხის მუნიციპალიტეტი)",
                    "ბოგა","გიორგიწმინდა (ახალციხის მუნიციპალიტეტი)","გურკელი",
                    "დიდი პამაჯი","ელიაწმინდა","ზემო სხვილისი","ზიკილია","თისელი",
                    "ივლიტა (ახალციხის მუნიციპალიტეტი)","კლდე (ახალციხის მუნიციპალიტეტი)",
                    "მინაძე (ახალციხის მუნიციპალიტეტი)","მიქელწმინდა","მუგარეთი","მუსხი",
                    "ნაოხრები","ორალი","პატარა პამაჯი","საყუნეთი","საძელი","სვირი (ახალციხის მუნიციპალიტეტი)",
                    "სხვილისი","ტატანისი","ტყემლანა","ურაველი","ფერსა","ღრელი","ყულალისი (ახალციხის მუნიციპალიტეტი)",
                    "წინუბანი (აგარის თემი)","წინუბანი (წყალთბილის თემი)","წირა","წნისი","წყალთბილა","წყორძა",
                    "წყრუთი","ჭაჭარაქი","ჭვინთა","ხაკი","ხეოთი (ახალციხის მუნიციპალიტეტი)","ჯულღა"
        ]
    },
    {
        city: "ბაღდათი",
        villages: [
                    "ალისმერეთი","დაფენილი","დიდველა","დიმი","ვარციხე","ზედა დიმი","ზედა ზეგანი",
                    "კაკასხიდი","მეორე ობჩა","ნებიერეთი","ნერგეეთი","პირველი ობჩა","როკითი",
                    "როხი","საიმედო","საკრაულა (ბაღდათის მუნიციპალიტეტი)","ფერსათი (ბაღდათის მუნიციპალიტეტი)",
                    "ქვედა ზეგანი","შუბანი (ბაღდათის მუნიციპალიტეტი)","წაბლარასხევი","წიფა (ბაღდათის მუნიციპალიტეტი)",
                    "წყალთაშუა","ხანი (ბაღდათის მუნიციპალიტეტი)"
        ]
    }
];
let regionWithVilagesFiber = [
    {
        region: "სამტრედია",
        villages: [
                    "ქ.სამტრედია","კვირიკე  ","მელაური","მიწაბოგირა",
                    "ნაბაკევი  ","ნაწილოფეთი","ნინუაკუთხე",
                    "ღანირი","ჩხენიში","ჭაგანი","ხიბლარი",
                    "ხუნჯულაური"
                ]
    },
    {
        city: "ვანი",
        villages: ["ქ.ვანი.თავისუფლების ქუჩა"]
    },
    {
        city: "აბაშა",
        villages: [
                    'ქ.აბაშა თავისუფლების ქუჩა',"გეზათი","გუგუნაყათი (მარნის თემი)","გუგუნაყათი (ქოლობნის თემი)",
                    "გულუხეთი","მაიდანი","მარანი (აბაშის მუნიციპალიტეტი)","მარანჭალა",
                    "პატარა გეზათი","სამიქაო","ქოლობანი",
        ]
    },
    {
        city: "ლანჩხუთი",
        villages: [
                   "ზემო შუხუთი","ნიგოითი","ქვემო შუხუთი","ქვიანი","ჩოლაბარგი","ჭყონაგორა","ჯაპანა"
        ]
    }
];


let selectViaregions = document.getElementById('regions');

/** start --->  internet technology change event**/
function changedTypeInt() {
    typeOfIntTech = document.getElementById('typeInt').value;
    selectViaregions.innerHTML = ' '; // Clear the options
    switch (typeOfIntTech) {
        case "უკაბელო ინტერნეტი(საჰაერო)":
            for (let i = 0; i < inCaseWifi.length; i++) {
                let option = document.createElement('option');
                option.value = inCaseWifi[i];
                option.text = inCaseWifi[i];
                selectViaregions.appendChild(option);
            }
            break;
        case "ოპტიკური ინტერნეტი":
            for (let i = 0; i < inCasefiber.length; i++) {
                let option = document.createElement('option');
                option.value = inCasefiber[i];
                option.text = inCasefiber[i];
                selectViaregions.appendChild(option);
            }
        break;
        case "აირჩიეთ ინტერნეტ ტექნოლოგია":
            let option = document.createElement('option');
            option.value = 'აირჩიეთ რაიონი';
            option.text = 'აირჩიეთ რაიონი';
            selectViaregions.appendChild(option);
            break;
        default:
            
            selectViaregions.innerHTML = ''; // Clear the options
            option.value = 'აირჩიეთ რაიონი';
    }
}
/** end --->  internet technology change event**/
/** end --->  region change event**/
function ChangeCityAndVilages() {
   let selectViaCity=document.getElementById('CityAndVilages');
   if(typeOfIntTech=='უკაბელო ინტერნეტი(საჰაერო)' || selectViaCity=='სამტრედიის რაიონი')
   {
    for (let i = 0; i < regionWithVilagesWifi[0].villages.length; i++) {
        let village = regionWithVilagesWifi[0].villages[i];
        let option1 = document.createElement('option');
        console.log(vilages);
        option1.value = village[i];
        option1.text = village[i];
        selectViaCity.appendChild(option1);
    }
    

   }
   else{

   }
}
