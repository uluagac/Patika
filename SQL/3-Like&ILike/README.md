# Patika.dev'in SQL Derslerinin Üçüncü Ödevi (LIKE and ILIKE)

## Ders
Ödev ve talimatlar: [patika.dev](https://academy.patika.dev/tr/courses/sql/Odev3)

## Senoryalar
1.  country tablosunda bulunan country sütunundaki ülke isimlerinden 'A' karakteri ile başlayıp 'a' karakteri ile sonlananları sıralayınız.
2.  country tablosunda bulunan country sütunundaki ülke isimlerinden en az 6 karakterden oluşan ve sonu 'n' karakteri ile sonlananları sıralayınız.
3.  film tablosunda bulunan title sütunundaki film isimlerinden en az 4 adet büyük ya da küçük harf farketmesizin 'T' karakteri içeren film isimlerini sıralayınız.
4.  film tablosunda bulunan tüm sütunlardaki verilerden title 'C' karakteri ile başlayan ve uzunluğu (length) 90 dan büyük olan ve rental_rate 2.99 olan verileri sıralayınız.

## Çözümler
1.  SELECT country FROM country  
    WHERE country LIKE 'A%a';

2.  SELECT country FROM country  
    WHERE country ILIKE '%_____n';

3.  SELECT title FROM film  
    WHERE title ~~* '%t%t%t%t%';

4.  SELECT * FROM film  
    WHERE title LIKE 'C%' AND length > 90 AND rental_rate = 2.99;

## Sonuç
![SQL Ödev 3](/SQL/3-Like&ILike/Odev3.jpg "SQL Ödev 3")