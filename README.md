# מערכת לניהול הטבות רווחה לחיילים

המערכת מנהלת שלוש יישויות: 1 רשומת הטבה 2 הקצאת תקציב 3 עסקת ניצול

## מבנה הקבצים

- `godi/.env`: קובץ env
- `godi/.env.example`:
- `godi/tests/`: קבצי הטסט
- `godi/Dockerfile + docker-compose.yml`:
- `godi/README.md`: קובץ ה-README.
- `godi/src/app.js`: הקובץ הראשי שמפעיל את השרת ואת הראוטים.
- `godi/src/db/`: מכיל את קבצי ההתחברות למסדי הנתונים בענן דרך משתני סביבה.
- `godi/src/controllers/`: הראוטים.
- `godi/src/services/`: הלוגיקה והבדיקות.
- `godi/src/repositories/`: הקבצים שמדברים ישירות עם מסד הנתונים.

## כל האנדפוייטים

```
1 `POST /soldiers/:soldierId/benefits` - מומש במלואו
2 `GET /soldiers/:soldierId/benefits` - מומש במלואו
3 `PATCH /soldiers/:soldierId/benefits` -   מומש במלואו
4 `POST /budget` - מומש במלואו
5 `GET /budget` - מומש במלואו
6 `GET /budget/:id/transactions` - מומש במלואו
7 `POST /budget/:id/spend` - מומש במלואו
```

## נימוק לבחירה בבסיסי נתונים

שילבתי בין mongo mysql:

1. **חיילים/הטבות במונגו:** בחרתי לעשות את זה עם MongoDB בגלל שכל חייל מקבל היסטוריה של הטבות שיכולה להשתנות מלא. במונגו זה פשוט יושב כמסמך אחד גמיש.
2. **תקציבים ב-SQL:** כי תקציב ועסקאות מתאימים מאוד לטבלה. יש טבלת `budgets` ויש טבלת `transactions` עם קשר של מפתח זר (`budget_id`). חישוב הוצאות (`SUM(amount)`) נהיה פשוט ומהיר.

## להרצה

להריץ מהתקייה הראשית

```JavaScript
npm install
npm start
```

הרצת הטסטים:

```JavaScript
npm test
```
