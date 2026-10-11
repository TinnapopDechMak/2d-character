# Moon Character Studio

เว็บแต่งตัวละคร 2D cutout พร้อม walk cycle สร้างใหม่แบบ standalone ไม่แก้โปรเจกต์เดิม

## เริ่มใช้งาน
ต้องมี Node.js 18 ขึ้นไป ไม่มี dependency ที่ต้องติดตั้ง

```bash
npm run dev
```
เปิด http://localhost:3000

## Deploy บน Vercel
อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้เข้า GitHub repository จากนั้น Import Project ใน Vercel
- Framework Preset: Other
- Root Directory: โฟลเดอร์ที่มี package.json
- Build Command: npm run build
- Output Directory: dist
- ไม่ต้องตั้ง environment variables

มี vercel.json เตรียมไว้แล้ว หรือใช้ Vercel CLI (`vercel`) จาก root ของโปรเจกต์

## ฟีเจอร์
- ตา 3 แบบ ปาก 3 แบบ ทรงผม 3 แบบ ชุด 3 แบบ
- สีผม สีชุด สีผิว เลือก preset หรือ custom color
- เดิน/หยุด หันซ้าย/ขวา ปรับความเร็ว ดูจุดหมุน
- บันทึกอัตโนมัติใน localStorage ของเครื่อง ไม่แชร์ข้ามอุปกรณ์
- ส่งออก PNG โปร่งใสของท่าปัจจุบัน และ JSON appearance; นำเข้า JSON คืนค่าหน้าตา
- รองรับมือถือ

## โครงสร้าง
- dist/app.js: renderer, customization, hierarchical transforms, walk cycle
- dist/index.html: UI
- dist/style.css: responsive layout
- server.mjs: development server

ภาพเป็น vector วาดด้วย Canvas ไม่ใช่ sprite จาก AI สามารถปรับ shape ใน head/torso/arm/leg ได้
ตัวละครเป็น front-facing stylized chibi; ปุ่มหันซ้าย/ขวา mirror ภาพ ไม่ใช่ภาพมุมข้างจริง
แขนและขามี parent-child transforms ที่ไหล่ ศอก สะโพก เข่า ส่วนมือและรองเท้าตามแขน/ขา
หัวมีผม ตา ปากเป็น layers และเปลี่ยนรูปร่างได้ การเดินใช้เวลา delta-time กับ sine phase
JSON ส่งออกเฉพาะ configuration ไม่ได้ส่งออกภาพชิ้นส่วนหรือ animation clip
PNG ส่งออกเฟรมเดียว; การส่งออก sprite sheet และอัปโหลดชิ้นส่วนภาพเองยังไม่รวมในรุ่นนี้

ทดสอบ syntax/build ด้วย `npm run check` และ `npm run build`
