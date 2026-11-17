const news = [
    {
        title: "#გივი, მოდი!",
        date: "02.11.2026",
        image: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/876299441_17887475691688835_922717594686469400_n.jpg?stp=dst-jpg_tt6&cstp=mx896x1104&ctp=s896x1104&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=pmFUmZIXvjUQ7kNvwHp6l4a&_nc_oc=AdorgPfxYMQaFZcZdWqxit6lLqje0XRx5E0KAJBW0GyUurQwMXdGqIZEKnktsYXa8gg&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=z4qlO1TZ9NKN3bHHQk5iLw&_nc_ss=7b2a8&oh=00_AQT7J4xcuQQvxA_ar7LNa0Fjdg0GmbGy5GrOv3DRxE0DJw&oe=6B01D101",
        short: "განათლების მინისტრის მოვიწვიეთ საჯარო დისკუსიაზე...",
        full: "2026 წლის 2 ნოემბერს გამართულ საჯარო ბრიფინგზე ილიაუნის წევრებმა განათლების მინისტრი გივი მიქანაძე ილიას სახელმწიფო უნივერსიტეტში საჯარო დისკუსიაზე მოვიწვიეთ, სადაც საუბარი იქნება განათლების ე.წ. რეფორმასთან დაკავშირებულ საკითხებზე და პასუხს გაეცემა ჩვენი სტუდენტებისთვის მნიშვნელოვან ყველა კითხვას."
    },
    {
        title: "ხელმოწერები",
        date: "03.11.2026",
        image: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/900852756_17888753562688835_50669226111426324_n.jpg?stp=dst-jpg_tt6&cstp=mx1088x1088&ctp=s1088x1088&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ner4Y6XNVNEQ7kNvwEWqASA&_nc_oc=AdqVkLPFBcmBguEKywbUqNlWBXNNKwaVsW9i6j6FzV4i1K3ZQwyAzXBl45npMA0uQbk&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=NfjhVlCm7YeVzIy5HjQIcA&_nc_ss=7b2a8&oh=00_AQRyqqyaMGvAOVaJIURl0uHYGdkl1ZtuBOVOfyXlX1FJoQ&oe=6B0200BC",
        short: "განათლების სამინისტროში 2500-მდე განცხადების შეტანა...",
        full: "2026 წლის 3 ნოემბერს ილიაუნის სტუდენტებმა განათლების სამინისტროს 2 400-ზე მეტი ხელმოწერა წარვუდგინეთ, რომლითაც განათლების მინისტრს, გივი მიქანაძეს, ილიას სახელმწიფო უნივერსიტეტში საჯარო დისკუსიაზე ვიწვევთ. ინიციატივას აკადემიური საზოგადოებაც უერთდება და მინისტრთან შეხვედრის მოთხოვნას იზიარებს."
    },
    {
        title: "ბანერები",
        date: "05.11.2026",
        image: "https://scontent.ftbs1-2.fna.fbcdn.net/v/t39.99422-6/890196421_2602680150201743_570667298865350796_n.png?stp=dst-jpg_tt6&cstp=mx4096x3303&ctp=s4096x3303&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dErE2iHOu7MQ7kNvwGZ5sWE&_nc_oc=AdqYL4fm1DVvG_1UPBt-OVGLji_6qVnSua_cHCZQ9JoE38iRNr9JSE0UWkci7bvwZdg&_nc_zt=14&_nc_ht=scontent.ftbs1-2.fna&_nc_gid=ey-A8HCmUWlmZR8GL39BxQ&_nc_ss=7b2a8&oh=00_AQQi6u2e31xZeQxjhGurjDDmO4vfJjpjrDQkjByyGVFbFg&oe=6B020345",
        short: "უნივერსიტეტში გავაკარით უამრავი ბანერი...",
        full: "2026 წლის 5 ნოემბერს ილიაუნის სტუდენტებმა უნივერსიტეტის ტერიტორიაზე ბანერები გავაკარით, რომლითაც განათლების მინისტრს, გივი მიქანაძეს, ილიას სახელმწიფო უნივერსიტეტში საჯარო დისკუსიაზე მოსვლისკენ მოვუწოდებთ. ჩვენი მოთხოვნა უცვლელია — ღია და საჯარო დისკუსია სტუდენტებთან. #გივიმოდი"
    },
    {
        title: "კონცერტი",
        date: "22.09.2026",
        image: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/816176191_17880749856688835_1268013141282107138_n.webp?stp=dst-jpg_tt6&cstp=mx1440x1800&ctp=s1440x1800&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0C62CNFLOL8Q7kNvwEDiNLF&_nc_oc=AdoAEndJvFCkDAbYkLOwKCYXFdOEZL-MPH0feI6I5Gx5tKbkbjj4snO8aAWHT5jpyHc&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=-Hlkh7f__uWLv0WFKY6ESA&_nc_ss=7b2a8&oh=00_AQREfGJbYrJ6EdkShL6Ku1oykxeM9fxCz9VhpT_XyZHPOA&oe=6B01E1AB",
        short: "22 სექტემბერს გვქონდა კონცერტი...",
        full: "2026 წლის 22 სექტემბერს კამპანიის „ილიას გზით განათლებისთვის“ დასასრულს შემაჯამებელი კონცერტი გაიმართა, რომელშიც მონაწილეობდნენ ჯგუფები „გამოუვალი მდგომარეობა“, Loud Speakers და ლექსო რატიანი. ღონისძიებამ კამპანიის ფარგლებში განხორციელებული აქტივობები და სტუდენტურ ინიციატივები სიმბოლურად შეაჯამა."
    },
    {
        title: "ილიას გზით განათლებისთვის",
        date: "2026 | ზაფხული",
        image: "https://scontent.ftbs1-1.fna.fbcdn.net/v/t51.82787-15/792595235_17878412715688835_7682914380079540041_n.jpg?stp=dst-jpg_tt6&cstp=mx3253x2896&ctp=s3253x2896&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=N5En-mFLEOkQ7kNvwGM2IWU&_nc_oc=AdqWWRrPLluAdqRg3tyzNhhLGpipWuFsx3gqDPhyk58xoeBb0lmej-Rp7S_Fv52PK7E&_nc_zt=23&_nc_ht=scontent.ftbs1-1.fna&_nc_gid=rsSVUpXUlsGY-oLt0VcTOg&_nc_ss=7b2a8&oh=00_AQTtnGZvv1JM2lZS_8OWReKbDlcGB-0ZE9GNlvypj8jFzQ&oe=6B01F292",
        short: "გავახარეთ უამრავი ბავშვი...",
        full: "კამპანიის „ილიას გზით განათლებისთვის“ ფარგლებში საქართველოს სხვადასხვა კუთხეს ვეწვიეთ და უამრავ ბავშვს სასკოლო ნივთები, სათამაშოები და სხვა საჩუქრები გადავეცით, რითაც მათ ყოველდღიურობაში სიხარული და დადებითი ემოციები შევიტანეთ."
    },
    {
        title: "დიუშენის კამპანია",
        date: "03.06.2026",
        image: "https://scontent.ftbs10-1.fna.fbcdn.net/v/t51.82787-15/710138646_17863266198688835_3957680636292903247_n.webp?stp=dst-jpg_tt6&cstp=mx1440x960&ctp=s1440x960&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_ohc=42HrOb_w-rUQ7kNvwEV2iF7&_nc_oc=AdoO4ZWCepXPZhrx-p3a6nJIlERnM5701UU_qEbiZXYNJmYxJBSyRwhiMRrH-mbofUg&_nc_zt=23&_nc_ht=scontent.ftbs10-1.fna&_nc_gid=jgw-EJ5uhKOZP2wz8jbhzg&_nc_ss=7b2a8&oh=00_AQSonKwDALv7dNSoP_3PMoGqg9lFCUj9IurS5EGGHDLBoA&oe=6B01EDCD",
        short: "შევაგროვეთ 2 000 000+ ლარი...",
        full: "დიუშენის კუნთოვანი დისტროფიით დაავადებული ბავშვების მხარდასაჭერად ჩვენმა ბავშვებმა მნიშვნელოვანი კამპანია განახორციელეს, რომლის ფარგლებშიც 2.3 მილიონი ლარი შეგროვდა. კამპანიის შედეგად, დაავადებული ბავშვებისთვის აუცილებელი მედიკამენტების შეძენა გახდა შესაძლებელი."
    }
];
const container = document.getElementById("newsContainer");
const modal = document.getElementById("newsModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.getElementById("closeModal");
news.forEach((item, index) => {
    const card = document.createElement("article");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    const content = document.createElement("div");
    content.classList.add("card-content");
    const date = document.createElement("div");
    date.classList.add("date");
    date.textContent = item.date;
    const title = document.createElement("h3");
    title.textContent = item.title;
    const description = document.createElement("p");
    description.textContent = item.short;
    const button = document.createElement("button");
    button.classList.add("more-btn");
    button.textContent = "სრულად ნახვა";
    button.addEventListener("click", () => {
        openModal(index);
    });
    content.append(date, title, description, button);
    card.append(image, content);
    container.appendChild(card);
});
function openModal(index) {
    const item = news[index];
    modalImage.src = item.image;
    modalImage.alt = item.title;
    modalTitle.textContent = item.title;
    modalDate.textContent = item.date;
    modalDescription.textContent = item.full;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}
closeBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});