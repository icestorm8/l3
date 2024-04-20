import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <h2 className="font-weight-bold">lesson 3 homework</h2>
      <p style={{ direction: "rtl" }} className="container col-6 text-center">
        משימה לאחר פסח צרו אפלקציית חיפוש תמונות התחברו ל API הבא:
        https://pixabay.com/api/?key=34881482-4599ff7bb74449f6f2390708c&q=cats&image_type=photo&pretty=true
        יש לשנות את הKEY לפי ה API שנרשמתם בו באתר PIXABAY
        https://pixabay.com/api/docs/ ושימו לב שמשתנה ה Q מכיל בתוכו את התמונות
        שאתם מחפשים צרו קומפנינטת עמוד בשם pixa שתיהיה בנויה מאינפוט וכפתור,
        ודיב שיציג רשימת תמונות כאשר המשתמש מכניס באינפוט של החיפוש את שם התמונה
        שהוא מחפש , נניח DOGS הוא ייקבל למטה ברשימה את תמונות הכלבים שימו לב: את
        התמונות הקומפנינטה תציג יש לקחת כ QUERY STRING מהכתובת למעלה ב URL בשם S
        כלומר אם אני אכנס localhost:3000/pixa?s=cats אני אקבל רשימת תמונות של
        חתולים יש להציג בכל חיפוש 4 תמונות בשורה , יש להשתשמש בתמונות שמגיעות
        ממאפיין webformatURL: וכאשר לוחצים על התמונה תשלחו בלינק חיצוני (טאב
        חדש) את המשתמש ללינק של התמונה הענקית שנמצא במאפיין largeImageURL
      </p>
      <Link to={"/pixa"} className="btn btn-primary">
        check it out here
      </Link>
    </div>
  );
}
