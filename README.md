# מערכת לניהול הטבות רווחה לחיילים

המערכת מנהלת שלוש יישויות: 1 רשומת הטבה 2 הקצאת תקציב 3 עסקת ניצול

## מבנה הקבצים

הפרויקט בנוי בצורה של שכבות, כדי שיהיה מסודר בהמשך:

- `godi/Dockerfile`:
- `godi/README.md`: קובץ ה-README.
- `godi/src/app.js`: הקובץ הראשי שמפעיל את השרת ואת הראוטים.
- `godi/src/db/`: מכיל את קבצי ההתחברות למסדי הנתונים בענן דרך משתני סביבה.
- `godi/src/controllers/`: הראוטים שלנו.
- `godi/src/services/`: הלוגיקה והבדיקות.
- `godi/src/repositories/`: הקבצים שמדברים ישירות עם מסד הנתונים.

## כל האנדפוייטים

1 `POST /soldiers/:soldierId/benefits` - מומש
2 `GET /soldiers/:soldierId/benefits` - מומש


## להרצה

```
npm start
```