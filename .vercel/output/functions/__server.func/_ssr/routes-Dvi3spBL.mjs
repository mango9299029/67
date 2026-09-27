import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Moon, c as Cloud, i as Sun, l as CloudOff, o as Menu, r as Trash2, s as Lock, t as X, u as Check } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as Slot, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
import { a as getApp, o as getApps, s as initializeApp } from "../_libs/@firebase/app+[...].mjs";
import "../_libs/firebase.mjs";
import { a as remove, i as ref, n as onValue, o as set, r as push, t as getDatabase } from "../_libs/@firebase/database+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dvi3spBL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm font-sans font-semibold transition-[transform,box-shadow,background-color,opacity] duration-150 ease-[var(--ease-out-smooth)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:pointer-events-none disabled:opacity-45 active:scale-[0.98]", {
	variants: {
		variant: {
			primary: "bg-gold text-navy-2 hover:shadow-[0_4px_14px_rgba(192,138,46,0.4)]",
			outline: "border border-line bg-transparent text-ink hover:bg-bg-2",
			quiet: "bg-bg-2 text-ink hover:bg-line",
			danger: "bg-bad-soft text-bad hover:opacity-90",
			ghost: "bg-transparent text-cream hover:bg-white/10",
			navy: "bg-navy text-cream hover:opacity-90"
		},
		size: {
			default: "h-11 px-5 text-base",
			sm: "h-9 px-3 text-sm",
			lg: "h-12 px-6 text-base",
			icon: "size-10"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		"data-slot": "button",
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var LEVEL_NAMES = {
	1: "พื้นฐานตรีโกณมิติ",
	2: "sin cos tan",
	3: "หาความยาวด้าน",
	4: "หามุม",
	5: "พีทาโกรัส + ตรีโกณมิติ",
	6: "โจทย์ประยุกต์"
};
var CHECKLIST = [
	"1. วาดรูปก่อน",
	"2. หามุมที่โจทย์สนใจ",
	"3. ระบุด้าน ข้าม / ชิด / ฉาก",
	"4. เลือก sin / cos / tan",
	"5. แทนค่าลงสูตร",
	"6. แก้สมการ",
	"7. ตรวจคำตอบและหน่วย"
];
var DEFAULT_QUESTIONS = /* @__PURE__ */ JSON.parse("[{\"level\":1,\"q\":\"ตรีโกณมิติเกี่ยวข้องโดยตรงกับรูปเรขาคณิตชนิดใด\",\"choices\":[\"สามเหลี่ยมด้านเท่า\",\"สามเหลี่ยมมุมฉาก\",\"วงกลม\",\"สี่เหลี่ยมจัตุรัส\"],\"correct\":1,\"steps\":[\"ตรีโกณมิติศึกษาความสัมพันธ์ระหว่างมุมกับด้านในรูปสามเหลี่ยมมุมฉากโดยตรง\"],\"why\":\"สูตร sin cos tan ทั้งหมดถูกนิยามจากด้านทั้งสามของสามเหลี่ยมมุมฉากเท่านั้น\"},{\"level\":1,\"q\":\"ในสามเหลี่ยมมุมฉาก มุมที่มีขนาด 90° เรียกว่าอะไร\",\"choices\":[\"มุมแหลม\",\"มุมป้าน\",\"มุมฉาก\",\"มุมตรง\"],\"correct\":2,\"steps\":[\"มุมขนาด 90° มีชื่อเฉพาะว่า \\\"มุมฉาก\\\" เป็นมุมที่กำหนดว่าสามเหลี่ยมนั้นเป็นสามเหลี่ยมมุมฉาก\"],\"why\":\"นิยามพื้นฐานของสามเหลี่ยมมุมฉากคือมีมุมหนึ่งเท่ากับ 90° พอดี\"},{\"level\":1,\"q\":\"ด้านที่ยาวที่สุดในสามเหลี่ยมมุมฉาก ซึ่งอยู่ตรงข้ามมุมฉาก เรียกว่าอะไร\",\"choices\":[\"ด้านประชิด\",\"ด้านตรงข้าม\",\"ด้านตรงข้ามมุมฉาก\",\"ด้านฐาน\"],\"correct\":2,\"steps\":[\"ด้านที่อยู่ตรงข้ามมุม 90° เสมอ และเป็นด้านที่ยาวที่สุดในสามเหลี่ยมมุมฉาก เรียกว่าด้านตรงข้ามมุมฉาก (Hypotenuse)\"],\"why\":\"ด้านนี้ไม่เปลี่ยนชื่อไม่ว่าจะสนใจมุมแหลมมุมใดในสามเหลี่ยม\"},{\"level\":1,\"q\":\"ถ้าสนใจมุม θ ด้านที่อยู่ตรงข้ามมุม θ พอดี (ไม่ใช่มุมฉาก) เรียกว่าอะไร\",\"choices\":[\"ด้านตรงข้ามมุมฉาก\",\"ด้านตรงข้าม\",\"ด้านประชิด\",\"ด้านร่วม\"],\"correct\":1,\"steps\":[\"ด้านที่อยู่ฝั่งตรงข้ามกับมุม θ ที่กำลังพิจารณาพอดี เรียกว่าด้านตรงข้าม (Opposite)\"],\"why\":\"ชื่อด้านนี้เปลี่ยนไปตามมุมที่เราเลือกสนใจในสามเหลี่ยม\"},{\"level\":1,\"q\":\"ด้านที่อยู่ติดกับมุม θ แต่ไม่ใช่ด้านตรงข้ามมุมฉาก เรียกว่าอะไร\",\"choices\":[\"ด้านตรงข้าม\",\"ด้านตรงข้ามมุมฉาก\",\"ด้านประชิด\",\"ด้านขนาน\"],\"correct\":2,\"steps\":[\"ด้านที่แนบชิดกับมุม θ อยู่ (ไม่ใช่ด้านที่ยาวที่สุด) เรียกว่าด้านประชิด (Adjacent)\"],\"why\":\"ด้านประชิดกับด้านตรงข้ามมุมฉากประกอบกันเป็นมุมฉาก 90° ที่จุดยอด\"},{\"level\":2,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุม θ ยาว 3 ซม. ด้านตรงข้ามมุมฉากยาว 5 ซม. sin θ มีค่าเท่าใด\",\"choices\":[\"3/5\",\"4/5\",\"3/4\",\"4/3\"],\"correct\":0,\"tri\":[\"ตรงข้าม = 3\",\"ประชิด = 4\",\"ตรงข้ามมุมฉาก = 5\"],\"steps\":[\"sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก\",\"sin θ = 3 / 5\",\"sin θ = 0.6\"],\"why\":\"โจทย์ให้ด้าน \\\"ข้าม\\\" และ \\\"ฉาก\\\" มาครบ ตรงกับนิยามของ sin โดยตรง (SOH)\"},{\"level\":2,\"q\":\"จากรูปสามเหลี่ยมมุมฉาก ด้านประชิดมุม θ ยาว 4 ซม. ด้านตรงข้ามมุมฉากยาว 5 ซม. cos θ มีค่าเท่าใด\",\"choices\":[\"3/5\",\"5/4\",\"4/5\",\"3/4\"],\"correct\":2,\"tri\":[\"ตรงข้าม = 3\",\"ประชิด = 4\",\"ตรงข้ามมุมฉาก = 5\"],\"steps\":[\"cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก\",\"cos θ = 4 / 5\",\"cos θ = 0.8\"],\"why\":\"โจทย์ให้ด้าน \\\"ชิด\\\" และ \\\"ฉาก\\\" มาครบ ตรงกับนิยามของ cos โดยตรง (CAH)\"},{\"level\":2,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุม θ ยาว 8 ซม. ด้านประชิดยาว 15 ซม. tan θ มีค่าเท่าใด\",\"choices\":[\"15/8\",\"8/17\",\"8/15\",\"15/17\"],\"correct\":2,\"tri\":[\"ตรงข้าม = 8\",\"ประชิด = 15\",\"ตรงข้ามมุมฉาก = 17\"],\"steps\":[\"tan θ = ด้านตรงข้าม / ด้านประชิด\",\"tan θ = 8 / 15\"],\"why\":\"โจทย์ให้ด้าน \\\"ข้าม\\\" และ \\\"ชิด\\\" มาครบ ตรงกับนิยามของ tan โดยตรง (TOA)\"},{\"level\":2,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุม θ ยาว 6 ซม. ด้านตรงข้ามมุมฉากยาว 10 ซม. sin θ มีค่าเท่าใด\",\"choices\":[\"0.4\",\"0.6\",\"0.8\",\"0.75\"],\"correct\":1,\"tri\":[\"ตรงข้าม = 6\",\"ประชิด = 8\",\"ตรงข้ามมุมฉาก = 10\"],\"steps\":[\"sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก\",\"sin θ = 6 / 10\",\"sin θ = 0.6\"],\"why\":\"ใช้นิยาม sin = ข้าม/ฉาก แทนค่าตรง ๆ ได้เลยโดยไม่ต้องหาด้านที่สาม\"},{\"level\":2,\"q\":\"สามเหลี่ยมมุมฉากมีด้านประชิดมุม θ ยาว 12 ซม. ด้านตรงข้ามมุมฉากยาว 13 ซม. cos θ มีค่าเท่าใด\",\"choices\":[\"5/13\",\"12/13\",\"13/12\",\"5/12\"],\"correct\":1,\"tri\":[\"ตรงข้าม = 5\",\"ประชิด = 12\",\"ตรงข้ามมุมฉาก = 13\"],\"steps\":[\"cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก\",\"cos θ = 12 / 13\"],\"why\":\"ใช้นิยาม cos = ชิด/ฉาก แทนค่าตรง ๆ ได้เลย\"},{\"level\":3,\"q\":\"บันไดพาดกำแพงทำมุม 30° กับพื้น ยาว 10 เมตร บันไดพาดสูงจากพื้นกี่เมตร\",\"choices\":[\"10 เมตร\",\"8.66 เมตร\",\"5 เมตร\",\"7.5 เมตร\"],\"correct\":2,\"tri\":[\"θ = 30°\",\"ตรงข้ามมุมฉาก (บันได) = 10 ม.\",\"ต้องการหา: ด้านตรงข้าม (ความสูง)\"],\"steps\":[\"โจทย์ให้ \\\"ฉาก\\\" และต้องการหา \\\"ข้าม\\\" → ใช้ sin\",\"sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก\",\"sin 30° = ความสูง / 10\",\"0.5 = ความสูง / 10\",\"ความสูง = 0.5 × 10 = 5 เมตร\"],\"why\":\"sin 30° เป็นค่ามุมพิเศษที่เท่ากับ 0.5 พอดี ทำให้คำนวณได้ตัวเลขลงตัว\"},{\"level\":3,\"q\":\"มุมเงยจากจุดที่ห่างจากเสา 8 เมตร ไปยังยอดเสาเป็นมุม 60° เสาสูงกี่เมตร (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"13.86 เมตร\",\"9.24 เมตร\",\"6.93 เมตร\",\"4.00 เมตร\"],\"correct\":0,\"tri\":[\"θ = 60°\",\"ประชิด (ระยะห่างจากเสา) = 8 ม.\",\"ต้องการหา: ด้านตรงข้าม (ความสูงเสา)\"],\"steps\":[\"โจทย์ให้ \\\"ชิด\\\" และต้องการหา \\\"ข้าม\\\" → ใช้ tan\",\"tan θ = ด้านตรงข้าม / ด้านประชิด\",\"tan 60° = ความสูง / 8\",\"ความสูง = 8 × tan 60°\",\"ความสูง = 8 × 1.7321 ≈ 13.86 เมตร\"],\"why\":\"tan 60° ≈ 1.7321 เป็นค่าคงที่ที่หาได้จากเครื่องคิดเลขวิทยาศาสตร์\"},{\"level\":3,\"q\":\"มุม θ = 40° ด้านประชิดยาว 12 ซม. ด้านตรงข้ามยาวเท่าใด (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"9.19 ซม.\",\"7.71 ซม.\",\"10.07 ซม.\",\"15.66 ซม.\"],\"correct\":2,\"tri\":[\"θ = 40°\",\"ประชิด = 12 ซม.\",\"ต้องการหา: ด้านตรงข้าม\"],\"steps\":[\"โจทย์ให้ \\\"ชิด\\\" และต้องการหา \\\"ข้าม\\\" → ใช้ tan\",\"tan θ = ด้านตรงข้าม / ด้านประชิด\",\"tan 40° = ด้านตรงข้าม / 12\",\"ด้านตรงข้าม = 12 × tan 40°\",\"ด้านตรงข้าม ≈ 12 × 0.8391 ≈ 10.07 ซม.\"],\"why\":\"กดเครื่องคิดเลข tan(40) ก่อน แล้วจึงนำไปคูณกับ 12\"},{\"level\":3,\"q\":\"มุม θ = 35° ด้านตรงข้ามมุมฉากยาว 20 ซม. ด้านประชิดยาวเท่าใด (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"11.47 ซม.\",\"16.38 ซม.\",\"14.00 ซม.\",\"24.42 ซม.\"],\"correct\":1,\"tri\":[\"θ = 35°\",\"ตรงข้ามมุมฉาก = 20 ซม.\",\"ต้องการหา: ด้านประชิด\"],\"steps\":[\"โจทย์ให้ \\\"ฉาก\\\" และต้องการหา \\\"ชิด\\\" → ใช้ cos\",\"cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก\",\"cos 35° = ด้านประชิด / 20\",\"ด้านประชิด = 20 × cos 35°\",\"ด้านประชิด ≈ 20 × 0.8192 ≈ 16.38 ซม.\"],\"why\":\"cos ใช้เมื่อมีด้าน \\\"ชิด\\\" กับ \\\"ฉาก\\\" เกี่ยวข้องกันเท่านั้น\"},{\"level\":3,\"q\":\"มุม θ = 52° ด้านตรงข้ามยาว 15 ซม. ด้านตรงข้ามมุมฉากยาวเท่าใด (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"9.23 ซม.\",\"24.36 ซม.\",\"11.82 ซม.\",\"19.04 ซม.\"],\"correct\":3,\"tri\":[\"θ = 52°\",\"ตรงข้าม = 15 ซม.\",\"ต้องการหา: ด้านตรงข้ามมุมฉาก\"],\"steps\":[\"โจทย์ให้ \\\"ข้าม\\\" และต้องการหา \\\"ฉาก\\\" → ใช้ sin\",\"sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก\",\"sin 52° = 15 / ด้านตรงข้ามมุมฉาก\",\"ด้านตรงข้ามมุมฉาก = 15 / sin 52°\",\"ด้านตรงข้ามมุมฉาก ≈ 15 / 0.7880 ≈ 19.04 ซม.\"],\"why\":\"เมื่อสิ่งที่ต้องหาอยู่ในตัวหารของสูตร ต้องจัดสมการก่อนแทนค่าคำนวณ\"},{\"level\":4,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้าม 3 ซม. ด้านประชิด 4 ซม. มุม θ มีค่าประมาณเท่าใด\",\"choices\":[\"53.13°\",\"45.00°\",\"36.87°\",\"30.00°\"],\"correct\":2,\"tri\":[\"ตรงข้าม = 3\",\"ประชิด = 4\",\"ตรงข้ามมุมฉาก = 5\"],\"steps\":[\"รู้ด้าน \\\"ข้าม\\\" และ \\\"ชิด\\\" → ใช้ tan⁻¹\",\"tan θ = 3/4\",\"θ = tan⁻¹(3/4)\",\"θ ≈ 36.87°\"],\"why\":\"เมื่อรู้ด้านสองด้านแต่ไม่รู้มุม ต้องใช้ฟังก์ชันผกผัน (tan⁻¹) เพื่อย้อนกลับไปหามุม\"},{\"level\":4,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้าม 5 ซม. ด้านตรงข้ามมุมฉาก 13 ซม. มุม θ มีค่าประมาณเท่าใด\",\"choices\":[\"67.38°\",\"22.62°\",\"36.87°\",\"30.96°\"],\"correct\":1,\"tri\":[\"ตรงข้าม = 5\",\"ประชิด = 12\",\"ตรงข้ามมุมฉาก = 13\"],\"steps\":[\"รู้ด้าน \\\"ข้าม\\\" และ \\\"ฉาก\\\" → ใช้ sin⁻¹\",\"sin θ = 5/13\",\"θ = sin⁻¹(5/13)\",\"θ ≈ 22.62°\"],\"why\":\"เมื่อโจทย์ให้ด้านตรงข้ามและด้านตรงข้ามมุมฉาก ให้ใช้ sin⁻¹ เสมอ\"},{\"level\":4,\"q\":\"สามเหลี่ยมมุมฉากมีด้านประชิด 15 ซม. ด้านตรงข้ามมุมฉาก 17 ซม. มุม θ มีค่าประมาณเท่าใด\",\"choices\":[\"61.93°\",\"28.07°\",\"16.26°\",\"73.74°\"],\"correct\":1,\"tri\":[\"ตรงข้าม = 8\",\"ประชิด = 15\",\"ตรงข้ามมุมฉาก = 17\"],\"steps\":[\"รู้ด้าน \\\"ชิด\\\" และ \\\"ฉาก\\\" → ใช้ cos⁻¹\",\"cos θ = 15/17\",\"θ = cos⁻¹(15/17)\",\"θ ≈ 28.07°\"],\"why\":\"เมื่อโจทย์ให้ด้านประชิดและด้านตรงข้ามมุมฉาก ให้ใช้ cos⁻¹ เสมอ\"},{\"level\":4,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้าม 7 ซม. ด้านประชิด 24 ซม. มุม θ มีค่าประมาณเท่าใด\",\"choices\":[\"73.74°\",\"16.26°\",\"22.62°\",\"67.38°\"],\"correct\":1,\"tri\":[\"ตรงข้าม = 7\",\"ประชิด = 24\",\"ตรงข้ามมุมฉาก = 25\"],\"steps\":[\"รู้ด้าน \\\"ข้าม\\\" และ \\\"ชิด\\\" → ใช้ tan⁻¹\",\"tan θ = 7/24\",\"θ = tan⁻¹(7/24)\",\"θ ≈ 16.26°\"],\"why\":\"ฝึกสังเกตว่าด้านสองด้านที่โจทย์ให้เป็นคู่ ข้าม-ชิด จึงเลือก tan⁻¹\"},{\"level\":4,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้าม 9 ซม. ด้านตรงข้ามมุมฉาก 15 ซม. มุม θ มีค่าประมาณเท่าใด\",\"choices\":[\"53.13°\",\"48.19°\",\"36.87°\",\"30.00°\"],\"correct\":2,\"tri\":[\"ตรงข้าม = 9\",\"ประชิด = 12\",\"ตรงข้ามมุมฉาก = 15\"],\"steps\":[\"รู้ด้าน \\\"ข้าม\\\" และ \\\"ฉาก\\\" → ใช้ sin⁻¹\",\"sin θ = 9/15 = 0.6\",\"θ = sin⁻¹(0.6)\",\"θ ≈ 36.87°\"],\"why\":\"อัตราส่วน 9/15 ลดรูปเป็น 3/5 ซึ่งเป็นอัตราส่วนของสามเหลี่ยม 3-4-5 ที่พบบ่อย\"},{\"level\":5,\"q\":\"สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉากยาว 6 ซม. และ 8 ซม. ด้านตรงข้ามมุมฉากยาวเท่าใด\",\"choices\":[\"12 ซม.\",\"14 ซม.\",\"10 ซม.\",\"48 ซม.\"],\"correct\":2,\"steps\":[\"ใช้ทฤษฎีบทพีทาโกรัส c² = a² + b²\",\"c² = 6² + 8² = 36 + 64 = 100\",\"c = √100 = 10 ซม.\"],\"why\":\"6-8-10 เป็นอัตราส่วนของสามเหลี่ยมพีทาโกรัสชุด 3-4-5 คูณด้วย 2\"},{\"level\":5,\"q\":\"สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุมฉากยาว 13 ซม. ด้านหนึ่งยาว 5 ซม. อีกด้านหนึ่งยาวเท่าใด\",\"choices\":[\"8 ซม.\",\"12 ซม.\",\"18 ซม.\",\"10 ซม.\"],\"correct\":1,\"steps\":[\"ใช้ทฤษฎีบทพีทาโกรัส b² = c² − a²\",\"b² = 13² − 5² = 169 − 25 = 144\",\"b = √144 = 12 ซม.\"],\"why\":\"เมื่อรู้ด้านตรงข้ามมุมฉากและด้านประกอบมุมฉากหนึ่งด้าน ให้ย้ายข้างสมการก่อนถอดราก\"},{\"level\":5,\"q\":\"สามเหลี่ยมมุมฉากมีด้าน 9, 12, 15 ซม. ถ้า θ อยู่ตรงข้ามด้าน 9 ซม. แล้ว cos θ มีค่าเท่าใด\",\"choices\":[\"9/15\",\"9/12\",\"12/15\",\"12/9\"],\"correct\":2,\"steps\":[\"ตรวจสอบว่า 9-12-15 เป็นสามเหลี่ยมมุมฉาก (9²+12²=15² จริง)\",\"ด้านตรงข้าม θ = 9, ด้านประชิด θ = 12, ด้านตรงข้ามมุมฉาก = 15\",\"cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก = 12/15\"],\"why\":\"ต้องระบุก่อนว่าด้านใดเป็นตรงข้าม/ประชิดของมุม θ ที่โจทย์ระบุ ก่อนเลือกสูตร cos\"},{\"level\":5,\"q\":\"สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉาก 7 และ 24 ซม. ถ้า θ อยู่ตรงข้ามด้าน 7 แล้ว sin θ มีค่าเท่าใด\",\"choices\":[\"7/24\",\"7/25\",\"24/25\",\"24/7\"],\"correct\":1,\"steps\":[\"หาด้านตรงข้ามมุมฉากก่อนด้วยพีทาโกรัส: c² = 7² + 24² = 49+576 = 625\",\"c = √625 = 25 ซม.\",\"sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก = 7/25\"],\"why\":\"ต้องหาด้านที่สามให้ครบก่อน จึงจะสามารถหาค่า sin θ ได้\"},{\"level\":5,\"q\":\"สามเหลี่ยมมุมฉากมีด้านประกอบมุมฉาก 10 และ 24 ซม. ถ้า θ อยู่ตรงข้ามด้าน 24 แล้ว tan θ มีค่าเท่าใด\",\"choices\":[\"10/24\",\"24/26\",\"2.4\",\"10/26\"],\"correct\":2,\"steps\":[\"หาด้านตรงข้ามมุมฉากก่อนด้วยพีทาโกรัส: c² = 10² + 24² = 100+576 = 676\",\"c = √676 = 26 ซม.\",\"tan θ = ด้านตรงข้าม / ด้านประชิด = 24/10 = 2.4\"],\"why\":\"tan ไม่เกี่ยวข้องกับด้านตรงข้ามมุมฉากเลย ใช้แค่ด้านข้ามกับด้านชิดเท่านั้น\"},{\"level\":6,\"q\":\"บันไดยาว 6 เมตร ทำมุม 60° กับพื้น บันไดพาดสูงจากพื้นกี่เมตร (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"3.00 เมตร\",\"5.20 เมตร\",\"6.93 เมตร\",\"10.39 เมตร\"],\"correct\":1,\"tri\":[\"θ = 60°\",\"ตรงข้ามมุมฉาก (บันได) = 6 ม.\",\"ต้องการหา: ความสูง (ตรงข้าม)\"],\"steps\":[\"วาดรูป: บันไดเป็นด้านตรงข้ามมุมฉาก ความสูงเป็นด้านตรงข้ามมุม 60°\",\"ใช้ sin θ = ข้าม/ฉาก\",\"sin 60° = ความสูง / 6\",\"ความสูง = 6 × sin 60° ≈ 6 × 0.8660 ≈ 5.20 เมตร\"],\"why\":\"ระยะที่บันไดพาด \\\"สูงจากพื้น\\\" คือด้านตรงข้ามมุมเสมอ ไม่ใช่ความยาวบันไดเอง\"},{\"level\":6,\"q\":\"เสาไฟสูง 6 เมตร เกิดเงายาว 10 เมตร มุมเงยของดวงอาทิตย์มีค่าประมาณเท่าใด\",\"choices\":[\"36.87°\",\"30.96°\",\"53.13°\",\"59.04°\"],\"correct\":1,\"tri\":[\"ตรงข้าม (ความสูงเสา) = 6 ม.\",\"ประชิด (เงา) = 10 ม.\"],\"steps\":[\"วาดรูป: ความสูงเสาคือด้านตรงข้าม เงาคือด้านประชิดของมุมเงย\",\"ใช้ tan θ = ข้าม/ชิด\",\"tan θ = 6/10 = 0.6\",\"θ = tan⁻¹(0.6) ≈ 30.96°\"],\"why\":\"มุมเงยของดวงอาทิตย์คือมุมระหว่างพื้น (เงา) กับเส้นตรงไปยังยอดเสา\"},{\"level\":6,\"q\":\"คนสูง 1.5 เมตร ยืนห่างตึก 40 เมตร มองมุมเงยไปยอดตึกเป็นมุม 35° ตึกสูงกี่เมตร (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"28.01 เมตร\",\"29.51 เมตร\",\"30.51 เมตร\",\"24.44 เมตร\"],\"correct\":1,\"tri\":[\"θ = 35°\",\"ประชิด (ระยะห่าง) = 40 ม.\",\"ต้องบวกความสูงตา 1.5 ม. ในตอนท้าย\"],\"steps\":[\"หาความสูงจากระดับสายตาถึงยอดตึกก่อนด้วย tan\",\"tan 35° = ความสูง(จากตา) / 40\",\"ความสูง(จากตา) = 40 × tan 35° ≈ 40 × 0.7002 ≈ 28.01 เมตร\",\"ความสูงตึกทั้งหมด = 28.01 + 1.5 ≈ 29.51 เมตร\"],\"why\":\"เมื่อโจทย์ให้ความสูงของผู้สังเกต ต้องบวกความสูงตานั้นกลับเข้าไปในคำตอบสุดท้ายเสมอ\"},{\"level\":6,\"q\":\"ตึกสูง 30 เมตร เมื่อมุมเงยของดวงอาทิตย์เป็น 25° เงาของตึกทอดยาวกี่เมตร (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"14.00 เมตร\",\"64.34 เมตร\",\"27.19 เมตร\",\"33.10 เมตร\"],\"correct\":1,\"tri\":[\"θ = 25°\",\"ตรงข้าม (ความสูงตึก) = 30 ม.\",\"ต้องการหา: เงา (ประชิด)\"],\"steps\":[\"วาดรูป: ความสูงตึกคือด้านตรงข้าม เงาคือด้านประชิด\",\"ใช้ tan θ = ข้าม/ชิด\",\"tan 25° = 30 / เงา\",\"เงา = 30 / tan 25° ≈ 30 / 0.4663 ≈ 64.34 เมตร\"],\"why\":\"เมื่อสิ่งที่ต้องการหาอยู่ในตัวหาร ต้องจัดสมการสลับข้างก่อนคำนวณด้วยเครื่องคิดเลข\"},{\"level\":6,\"q\":\"ต้นไม้สูง 30 เมตร คนต้องยืนห่างต้นไม้กี่เมตร จึงมองยอดต้นไม้เป็นมุมเงย 30° (ทศนิยม 2 ตำแหน่ง)\",\"choices\":[\"51.96 เมตร\",\"17.32 เมตร\",\"25.98 เมตร\",\"60.00 เมตร\"],\"correct\":0,\"tri\":[\"θ = 30°\",\"ตรงข้าม (ความสูงต้นไม้) = 30 ม.\",\"ต้องการหา: ระยะห่าง (ประชิด)\"],\"steps\":[\"วาดรูป: ความสูงต้นไม้คือด้านตรงข้าม ระยะห่างคือด้านประชิด\",\"ใช้ tan θ = ข้าม/ชิด\",\"tan 30° = 30 / ระยะห่าง\",\"ระยะห่าง = 30 / tan 30° ≈ 30 / 0.5774 ≈ 51.96 เมตร\"],\"why\":\"ยิ่งมุมเงยเล็ก ยิ่งต้องยืนไกลจากต้นไม้มากขึ้น สอดคล้องกับผลลัพธ์ที่ได้\"}]");
function hashStr(str) {
	let h = 5381;
	const s = String(str);
	for (let i = 0; i < s.length; i++) h = (h * 33 ^ s.charCodeAt(i)) >>> 0;
	return "h" + h.toString(36);
}
var DEFAULT_PASS_HASH = "hsi3usn";
function getPool(state) {
	return state.customQuestions && state.customQuestions.length ? state.customQuestions : DEFAULT_QUESTIONS;
}
function getActiveQuestions(state) {
	const pool = getPool(state);
	const count = state.submitted && state.totalAtSubmission ? Math.min(state.totalAtSubmission, pool.length) : Math.max(1, Math.min(state.quizCount || pool.length, pool.length));
	return pool.slice(0, count);
}
function isAnswerCorrect(item, userAns) {
	if (item.type === "written") {
		if (userAns === void 0 || userAns === null || String(userAns).trim() === "") return false;
		if (item.numeric) {
			const a = parseFloat(String(userAns).replace(/,/g, ""));
			const b = parseFloat(String(item.answer));
			const tol = item.tolerance !== void 0 && item.tolerance !== null && String(item.tolerance) !== "" ? Number(item.tolerance) : .05;
			if (Number.isNaN(a) || Number.isNaN(b)) return false;
			return Math.abs(a - b) <= tol;
		}
		return String(userAns).trim().toLowerCase() === String(item.answer ?? "").trim().toLowerCase();
	}
	return userAns === item.correct;
}
function levelKeyOf(item) {
	return item.levelLabel ? item.levelLabel : "lv" + (item.level ?? 0);
}
var useTrigo = create()(persist((set, get) => ({
	page: "cover",
	name: "",
	studentClass: "",
	studentNo: "",
	answers: {},
	submitted: false,
	score: null,
	breakdown: null,
	deadline: null,
	totalAtSubmission: null,
	current: 0,
	cloudSent: false,
	cloudError: null,
	localHistory: [],
	checklist: {},
	theme: "light",
	isAdmin: false,
	passHash: DEFAULT_PASS_HASH,
	timerMinutes: 0,
	quizCount: DEFAULT_QUESTIONS.length,
	customQuestions: null,
	cloudSubs: [],
	examSyncedAt: null,
	setPage: (page) => set({ page }),
	setProfile: (patch) => set(patch),
	setAnswer: (index, value) => set((s) => ({ answers: {
		...s.answers,
		[index]: value
	} })),
	setCurrent: (n) => set({ current: n }),
	setDeadline: (n) => set({ deadline: n }),
	setTheme: (t) => set({ theme: t }),
	toggleChecklist: (i, checked) => set((s) => ({ checklist: {
		...s.checklist,
		[i]: checked
	} })),
	applyExam: (exam) => set((s) => ({
		quizCount: exam.quizCount || s.quizCount,
		timerMinutes: typeof exam.timerMinutes === "number" ? exam.timerMinutes : s.timerMinutes,
		customQuestions: Array.isArray(exam.questions) ? exam.questions : exam.questions === null ? null : s.customQuestions,
		passHash: exam.passHash || s.passHash,
		examSyncedAt: exam.updatedAt ?? Date.now()
	})),
	setCloudSubs: (items) => set({ cloudSubs: items }),
	setAdmin: (v) => set({ isAdmin: v }),
	setPassHash: (h) => set({ passHash: h }),
	setExamSettings: (quizCount, timerMinutes) => set((s) => ({
		quizCount,
		timerMinutes,
		deadline: s.timerMinutes !== timerMinutes && !s.submitted ? null : s.deadline
	})),
	setCustomQuestions: (q) => set({
		customQuestions: q,
		quizCount: q ? Math.max(1, Math.min(get().quizCount, q.length)) : DEFAULT_QUESTIONS.length
	}),
	gradeAndSubmit: (cloudOk, cloudError) => {
		const s = get();
		const Q = getActiveQuestions(s);
		let score = 0;
		const breakdown = {};
		Q.forEach((item, idx) => {
			const key = levelKeyOf(item);
			const label = item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "อื่น ๆ";
			if (!breakdown[key]) breakdown[key] = {
				correct: 0,
				total: 0,
				label
			};
			breakdown[key].total++;
			if (isAnswerCorrect(item, s.answers[idx])) {
				score++;
				breakdown[key].correct++;
			}
		});
		const submission = {
			id: "local-" + Date.now(),
			name: s.name || "ไม่ระบุชื่อ",
			studentClass: s.studentClass || "-",
			studentNo: s.studentNo || "-",
			score,
			total: Q.length,
			percent: Math.round(score / Q.length * 100),
			submittedAt: Date.now(),
			breakdown
		};
		const history = [submission, ...s.localHistory].slice(0, 50);
		set({
			score,
			submitted: true,
			breakdown,
			deadline: null,
			totalAtSubmission: Q.length,
			cloudSent: cloudOk,
			cloudError: cloudOk ? null : cloudError ?? null,
			localHistory: history,
			page: "results"
		});
		return submission;
	},
	restartQuiz: () => set({
		answers: {},
		submitted: false,
		score: null,
		breakdown: null,
		deadline: null,
		totalAtSubmission: null,
		current: 0,
		cloudSent: false,
		cloudError: null,
		page: "quiz"
	}),
	clearStudent: () => set({
		name: "",
		studentClass: "",
		studentNo: "",
		answers: {},
		submitted: false,
		score: null,
		breakdown: null,
		deadline: null,
		totalAtSubmission: null,
		current: 0,
		cloudSent: false,
		cloudError: null,
		page: "cover"
	}),
	clearLocalHistory: () => set({ localHistory: [] })
}), {
	name: "trigo_m3_v2",
	storage: createJSONStorage(() => typeof window !== "undefined" ? localStorage : {
		getItem: () => null,
		setItem: () => {},
		removeItem: () => {}
	}),
	skipHydration: true,
	partialize: (s) => ({
		name: s.name,
		studentClass: s.studentClass,
		studentNo: s.studentNo,
		answers: s.answers,
		submitted: s.submitted,
		score: s.score,
		breakdown: s.breakdown,
		deadline: s.deadline,
		totalAtSubmission: s.totalAtSubmission,
		current: s.current,
		cloudSent: s.cloudSent,
		cloudError: s.cloudError,
		localHistory: s.localHistory,
		checklist: s.checklist,
		theme: s.theme,
		passHash: s.passHash,
		timerMinutes: s.timerMinutes,
		quizCount: s.quizCount,
		customQuestions: s.customQuestions
	})
}));
var LINKS = [
	{
		id: "cover",
		label: "หน้าแรก"
	},
	{
		id: "lesson",
		label: "บทเรียน"
	},
	{
		id: "quiz",
		label: "แบบทดสอบ"
	},
	{
		id: "results",
		label: "คะแนน"
	},
	{
		id: "answers",
		label: "เฉลย"
	},
	{
		id: "admin",
		label: "แอดมิน"
	}
];
function AppNav() {
	const page = useTrigo((s) => s.page);
	const setPage = useTrigo((s) => s.setPage);
	const theme = useTrigo((s) => s.theme);
	const setTheme = useTrigo((s) => s.setTheme);
	const [open, setOpen] = (0, import_react.useState)(false);
	function go(id) {
		setPage(id);
		setOpen(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 bg-navy text-cream shadow-[0_2px_10px_rgba(0,0,0,0.15)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1040px] items-center justify-between gap-3 px-5 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline gap-2 text-[1.05rem] font-bold text-white",
					children: ["คณิต ม.3", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", {
						className: "text-[0.78rem] font-normal text-gold-soft",
						children: "ตรีโกณมิติ"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: cn("gap-1", open ? "absolute top-full right-0 left-0 flex flex-col border-t border-white/15 bg-navy-2 p-1.5" : "hidden md:flex"),
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go(link.id),
						"aria-current": page === link.id ? "page" : void 0,
						className: cn("rounded-sm px-3 py-2.5 text-[0.95rem] text-[#ede4d0] transition-colors duration-150 hover:bg-white/10 md:text-right md:w-auto", page === link.id && "bg-gold font-bold text-navy-2", open && "w-full text-right"),
						children: link.label
					}, link.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "rounded-full border border-white/20 bg-white/10 text-white",
						"aria-label": "สลับโหมดมืด/สว่าง",
						onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
						children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "border border-white/35 text-white md:hidden",
						"aria-label": "เมนู",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		})
	});
}
function Input({ className, type, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		"data-slot": "input",
		className: cn("h-11 w-full rounded-sm border border-line bg-bg-2 px-3 text-base text-ink placeholder:text-ink-soft", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold", "disabled:opacity-50", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		"data-slot": "textarea",
		className: cn("min-h-16 w-full rounded-sm border border-line bg-bg-2 px-3 py-2 text-base text-ink placeholder:text-ink-soft", "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-gold", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("block text-sm font-semibold text-ink-soft", className),
		...props
	});
}
function Dialog({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog$1, {
		"data-slot": "dialog",
		...props
	});
}
function DialogPortal({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogPortal$1, {
		"data-slot": "dialog-portal",
		...props
	});
}
function DialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
		className: cn("fixed inset-0 z-50 bg-[rgba(20,16,10,0.55)]", className),
		...props
	});
}
function DialogContent({ className, children, showClose = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
		className: cn("fixed top-1/2 left-1/2 z-50 w-[calc(100%-40px)] max-w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-panel p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)]", className),
		...props,
		children: [children, showClose ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
			className: "absolute top-3 right-3 rounded-sm p-1 text-ink-soft hover:text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: "ปิด"
			})]
		}) : null]
	})] });
}
function DialogTitle({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
		className: cn("mb-2.5 text-lg font-bold text-navy", className),
		...props
	});
}
function DialogDescription({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
		className: cn("mb-5 text-ink-soft", className),
		...props
	});
}
function CoverPage() {
	const name = useTrigo((s) => s.name);
	const studentClass = useTrigo((s) => s.studentClass);
	const studentNo = useTrigo((s) => s.studentNo);
	const setProfile = useTrigo((s) => s.setProfile);
	const setPage = useTrigo((s) => s.setPage);
	const passHash = useTrigo((s) => s.passHash);
	const clearStudent = useTrigo((s) => s.clearStudent);
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	function requestClear() {
		const entered = window.prompt("ยืนยันรหัสผ่านแอดมินเพื่อล้างข้อมูลผู้ใช้");
		if (entered === null) return;
		if (hashStr(entered) !== passHash) {
			toast.error("รหัสผ่านแอดมินไม่ถูกต้อง");
			return;
		}
		setConfirmOpen(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden bg-navy px-5 pt-16 pb-14 text-cream",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-0",
					style: { background: "radial-gradient(circle at 85% 10%, rgba(192,138,46,0.14), transparent 45%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					className: "absolute right-[-40px] bottom-[-30px] w-[280px] opacity-20",
					viewBox: "0 0 200 200",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
						points: "10,190 190,190 190,20",
						fill: "#F3E3C2"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-[840px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2.5 text-[0.95rem] font-semibold text-gold",
							children: "คณิตศาสตร์ ระดับชั้นมัธยมศึกษาปีที่ 3"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "m-0 text-[clamp(2rem,5vw,3.1rem)] leading-[1.25] font-bold",
							children: ["สื่อการเรียนรู้คณิตศาสตร์ ม.3", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block text-[0.68em] text-gold",
								children: "เรื่อง ตรีโกณมิติ"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 mb-7 max-w-[520px] text-[1.08rem] text-[#dcd2bb]",
							children: "เรียนจากพื้นฐาน 0 → ทำโจทย์ตรีโกณมิติได้ อธิบายทีละขั้นตอน พร้อมแบบทดสอบและเฉลยละเอียด เหมาะสำหรับผู้เริ่มต้นที่ไม่เคยเรียนเรื่องนี้มาก่อน"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-[420px] rounded-md border border-[rgba(247,242,228,0.18)] bg-[rgba(23,19,16,0.28)] p-[22px] backdrop-blur-[2px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "studentName",
									className: "text-[#eae1cb]",
									children: "ชื่อ-นามสกุล"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "studentName",
									className: "mt-1.5 border-white/30 bg-white text-[#241d12]",
									placeholder: "พิมพ์ชื่อ-นามสกุลของคุณ",
									value: name,
									onChange: (e) => setProfile({ name: e.target.value })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2.5 flex gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "studentClass",
											className: "text-[#eae1cb]",
											children: "ชั้น"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "studentClass",
											className: "mt-1.5 border-white/30 bg-white text-[#241d12]",
											placeholder: "เช่น ม.3/1",
											value: studentClass,
											onChange: (e) => setProfile({ studentClass: e.target.value })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
											htmlFor: "studentNo",
											className: "text-[#eae1cb]",
											children: "เลขที่"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											id: "studentNo",
											type: "number",
											className: "mt-1.5 border-white/30 bg-white text-[#241d12]",
											placeholder: "เช่น 15",
											value: studentNo,
											onChange: (e) => setProfile({ studentNo: e.target.value })
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									className: "mt-4 w-full",
									onClick: () => setPage("lesson"),
									children: "เริ่มเรียนรู้ / ทำแบบทดสอบ"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap gap-x-[22px] gap-y-2.5",
							children: [
								"แบบทดสอบ 30 ข้อ",
								"มีเฉลยละเอียดท้ายบท",
								"ส่งผลคะแนนถึงแอดมินอัตโนมัติ"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-2 text-[0.92rem] text-[#ede4d0]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-gold" }), t]
							}, t))
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[840px] px-5 py-8 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "danger",
				onClick: requestClear,
				children: "ล้างข้อมูลผู้ใช้ปัจจุบัน"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: confirmOpen,
			onOpenChange: setConfirmOpen,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "ยืนยันการล้างข้อมูล" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "ต้องการล้างข้อมูลชื่อ ชั้น เลขที่ และคำตอบปัจจุบันหรือไม่?" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						onClick: () => setConfirmOpen(false),
						children: "ยกเลิก"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: () => {
							clearStudent();
							setConfirmOpen(false);
							toast.success("ล้างข้อมูลนักเรียนเรียบร้อยแล้ว");
						},
						children: "ยืนยัน"
					})]
				})
			] })
		})
	] });
}
function TriangleDiagram({ opp = "ด้านตรงข้าม (Opposite)", adj = "ด้านประชิด (Adjacent)", hyp = "ด้านตรงข้ามมุมฉาก (Hypotenuse)", className = "max-w-[320px]" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `mx-auto my-4 flex justify-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 260 210",
			role: "img",
			"aria-label": "รูปสามเหลี่ยมมุมฉากแสดงด้านตรงข้าม ด้านประชิด และด้านตรงข้ามมุมฉาก",
			className: "h-auto w-full text-navy",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "30,180 230,180 230,30",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "210",
					y: "160",
					width: "20",
					height: "20",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 75 180 A 45 45 0 0 0 60.5 150",
					fill: "none",
					stroke: "var(--gold)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "80",
					y: "168",
					fontSize: "15",
					fill: "var(--gold)",
					fontWeight: "700",
					children: "θ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "50",
					y: "200",
					fontSize: "13",
					fill: "var(--ink)",
					children: adj
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "236",
					y: "110",
					fontSize: "13",
					fill: "var(--ink)",
					transform: "rotate(90 236 110)",
					children: opp
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "78",
					y: "95",
					fontSize: "13",
					fill: "var(--ink)",
					transform: "rotate(-39 90 95)",
					children: hyp
				})
			]
		})
	});
}
function Topic({ num, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mb-[22px] rounded-md border border-line bg-panel p-6 shadow-[var(--shadow-card)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-3.5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex size-[38px] shrink-0 items-center justify-center rounded-full bg-gold-soft font-bold text-gold dark:text-navy-2 dark:bg-gold",
				children: num
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "m-0 text-[1.22rem] text-ink",
				children: title
			})]
		}), children]
	});
}
function Example({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-3.5 rounded-sm border-l-4 border-teal bg-teal-soft px-4 py-3.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1.5 text-[0.88rem] font-bold text-teal",
			children: label
		}), children]
	});
}
function LessonPage() {
	const checklist = useTrigo((s) => s.checklist);
	const toggleChecklist = useTrigo((s) => s.toggleChecklist);
	const setPage = useTrigo((s) => s.setPage);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "pt-11 pb-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
					children: "บทเรียนตรีโกณมิติ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-7 max-w-[640px] text-ink-soft",
					children: "อ่านเรียงตามลำดับหัวข้อที่ 1 ถึง 8 ทุกหัวข้อจะอธิบายตั้งแต่ความหมาย สูตร ตัวแปร ไปจนถึงตัวอย่างทีละขั้นตอน"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 1,
				title: "ตรีโกณมิติคืออะไร",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3.5",
					children: [
						"ตรีโกณมิติ (Trigonometry) คือเรื่องที่ศึกษาความสัมพันธ์ระหว่าง",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "มุม" }),
						" กับ ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ความยาวของด้าน" }),
						" ในรูปสามเหลี่ยมมุมฉาก พูดง่าย ๆ คือ ถ้าเรารู้มุมและด้านบางส่วนของสามเหลี่ยมมุมฉาก เราสามารถคำนวณหาด้านหรือมุมที่เหลือได้ โดยไม่ต้องไปวัดจริง"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
					label: "ตัวอย่างสถานการณ์จริง",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0",
						children: "อยากรู้ความสูงของเสาไฟฟ้าโดยไม่ต้องปีนขึ้นไปวัด เราสามารถยืนห่างจากเสาระยะหนึ่ง แล้ววัดมุมเงยที่มองไปยังยอดเสา จากนั้นใช้ตรีโกณมิติคำนวณความสูงของเสาได้ทันที เช่นเดียวกับการหาความยาวบันไดที่พาดกำแพง หรือระยะทางที่มองเห็นจากที่สูง"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 2,
				title: "ส่วนประกอบของสามเหลี่ยมมุมฉาก",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3.5",
						children: [
							"สามเหลี่ยมมุมฉากมีมุมหนึ่งเท่ากับ 90° เสมอ เรียกว่า ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "มุมฉาก" }),
							" ",
							"เมื่อเราเลือก \"มุมที่สนใจ\" (แทนด้วย θ อ่านว่า ทีตา) ที่ไม่ใช่มุมฉาก ด้านทั้งสามของสามเหลี่ยมจะมีชื่อเรียกตามตำแหน่งที่สัมพันธ์กับมุมนั้น:"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleDiagram, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mb-3.5 list-disc ps-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ด้านตรงข้ามมุมฉาก (Hypotenuse)" }), " — ด้านที่ยาวที่สุด อยู่ตรงข้ามมุมฉากพอดี และไม่เปลี่ยนชื่อไม่ว่าจะสนใจมุมไหน"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ด้านตรงข้าม (Opposite)" }), " — ด้านที่อยู่ตรงข้ามกับมุม θ ที่เราสนใจพอดี"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "mb-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ด้านประชิด (Adjacent)" }), " — ด้านที่อยู่ติดกับมุม θ แต่ไม่ใช่ด้านตรงข้ามมุมฉาก"]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.92rem] text-ink-soft",
						children: "ข้อสังเกต: ถ้าเปลี่ยนไปสนใจมุมอีกมุมหนึ่ง ด้าน \"ตรงข้าม\" กับ \"ประชิด\" จะสลับกัน แต่ด้านตรงข้ามมุมฉากยังคงเดิมเสมอ"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 3,
				title: "sin cos tan คืออะไร",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3.5",
						children: [
							"sin, cos, tan คือ ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "อัตราส่วน" }),
							" ",
							"ระหว่างความยาวของด้านสองด้านในสามเหลี่ยมมุมฉาก โดยเทียบกับมุม θ ที่เราสนใจ:"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-box",
						children: ["sin θ = ด้านตรงข้าม ÷ ด้านตรงข้ามมุมฉาก", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sub",
							children: "sin θ = Opposite / Hypotenuse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-box",
						children: ["cos θ = ด้านประชิด ÷ ด้านตรงข้ามมุมฉาก", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sub",
							children: "cos θ = Adjacent / Hypotenuse"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-box",
						children: ["tan θ = ด้านตรงข้าม ÷ ด้านประชิด", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sub",
							children: "tan θ = Opposite / Adjacent"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "my-3.5 w-full border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-line bg-bg-2 px-3 py-2.5 text-center",
							children: "อัตราส่วน"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-line bg-bg-2 px-3 py-2.5 text-center",
							children: "สูตรแบบจำง่าย"
						})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "sin"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ข้าม / ฉาก"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "cos"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ชิด / ฉาก"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "tan"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ข้าม / ชิด"
							})] })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-4 flex flex-wrap gap-2.5",
						children: [
							"SOH",
							"CAH",
							"TOA"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-gold-soft px-4 py-2 font-bold text-[#5a3e0e] dark:text-gold",
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[0.92rem] text-ink-soft",
						children: "SOH = Sin=Opposite/Hypotenuse, CAH = Cos=Adjacent/Hypotenuse, TOA = Tan=Opposite/Adjacent — ท่องแค่ 3 คำนี้ก็จำสูตรได้ครบ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
						label: "ตัวอย่างทีละขั้น",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2",
								children: "สามเหลี่ยมมุมฉากมีด้านตรงข้ามมุม θ ยาว 3 ซม. ด้านตรงข้ามมุมฉากยาว 5 ซม. หา sin θ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eqline",
								children: "sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eqline",
								children: "sin θ = 3 / 5"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eqline",
								children: "sin θ = 0.6"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 4,
				title: "การเลือกใช้ sin cos tan",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3.5",
						children: "เคล็ดลับ: ดูว่าโจทย์ \"รู้\" ด้านคู่ไหน แล้วเลือกสูตรที่มีด้านคู่นั้นพอดี"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "my-3.5 w-full border-collapse",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-line bg-bg-2 px-3 py-2.5",
							children: "สิ่งที่โจทย์ให้มา"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "border border-line bg-bg-2 px-3 py-2.5",
							children: "สูตรที่ควรใช้"
						})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ข้าม + ฉาก"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "sin"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ชิด + ฉาก"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "cos"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "ข้าม + ชิด"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "border border-line px-3 py-2.5 text-center",
								children: "tan"
							})] })
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						label: "ตัวอย่างที่ 1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "m-0",
							children: [
								"โจทย์ให้ด้านตรงข้ามมุมฉากและด้านประชิด → ใช้ ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cos" }),
								" เพราะ cos = ชิด/ฉาก"
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Example, {
						label: "ตัวอย่างที่ 2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "m-0",
							children: [
								"โจทย์ให้ด้านตรงข้ามและด้านประชิด → ใช้ ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "tan" }),
								" เพราะ tan = ข้าม/ชิด"
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 5,
				title: "การหาความยาวด้าน",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3.5",
					children: "เมื่อรู้มุม θ และด้านหนึ่งด้าน สามารถหาด้านที่เหลือได้ด้วยการแทนค่าในสูตร sin cos tan แล้วจัดสมการหาด้านที่ยังไม่รู้"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
					label: "ตัวอย่างทีละขั้น",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2",
							children: "มุม θ = 30° ด้านตรงข้ามมุมฉากยาว 10 ม. หาความยาวด้านตรงข้าม (opposite)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eqline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ขั้นที่ 1:" }), " เลือกสูตร — โจทย์ให้ \"ข้าม\" (ที่ต้องการหา) และ \"ฉาก\" → ใช้ sin"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eqline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ขั้นที่ 2:" }), " sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eqline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ขั้นที่ 3:" }), " sin 30° = ด้านตรงข้าม / 10"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eqline",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ขั้นที่ 4:" }), " 0.5 = ด้านตรงข้าม / 10"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "eqline",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ขั้นที่ 5:" }),
								" ด้านตรงข้าม = 0.5 × 10 = ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5 เมตร" })
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 6,
				title: "การหามุม (Inverse Trigonometric Function)",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mb-3.5",
					children: [
						"ถ้ารู้ด้านสองด้าน แต่ไม่รู้ขนาดของมุม θ เราจะใช้",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ฟังก์ชันผกผัน" }),
						" ของ sin cos tan ซึ่งเขียนแทนด้วย sin⁻¹, cos⁻¹, tan⁻¹ (อ่านว่า อาร์กไซน์ อาร์กคอส อาร์กแทน) เพื่อ \"ย้อนกลับ\" จากอัตราส่วนไปเป็นมุม"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
					label: "ตัวอย่างทีละขั้น",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-2",
							children: "โจทย์: tan θ = 3/4 หา θ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline",
							children: "tan θ = 3/4"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline",
							children: "θ = tan⁻¹(3/4)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline",
							children: "θ ≈ 36.87°"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 7,
				title: "ทฤษฎีบทพีทาโกรัสที่เกี่ยวข้อง",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3.5",
						children: "ทฤษฎีบทพีทาโกรัสใช้หาด้านของสามเหลี่ยมมุมฉากได้โดยไม่ต้องใช้มุมเลย หากรู้ด้านสองด้าน:"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-box",
						children: ["a² + b² = c²", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sub",
							children: "a, b = ด้านประกอบมุมฉาก, c = ด้านตรงข้ามมุมฉาก"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Example, {
						label: "ตัวอย่างทีละขั้น",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mb-2",
								children: "ด้านประกอบมุมฉากยาว 6 ซม. และ 8 ซม. หาด้านตรงข้ามมุมฉาก"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eqline",
								children: "c² = a² + b²"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "eqline",
								children: "c² = 6² + 8² = 36 + 64 = 100"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "eqline",
								children: ["c = √100 = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "10 ซม." })]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Topic, {
				num: 8,
				title: "โจทย์ประยุกต์",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mb-3.5",
						children: [
							"โจทย์ประยุกต์มักอยู่ในรูปสถานการณ์จริง เช่น เสา ต้นไม้ บันได อาคาร เงา มุมเงย มุมก้ม ขั้นตอนสำคัญที่สุดคือ",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "วาดรูปสามเหลี่ยมจากโจทย์ก่อนคำนวณเสมอ" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mt-2.5 rounded-sm border border-line bg-bg-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between px-3.5 py-3 font-semibold [&::-webkit-details-marker]:hidden",
							children: ["มุมเงย (Angle of Elevation) คืออะไร", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl text-teal",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3.5 pb-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "มุมที่เงยหน้ามองจากแนวระดับสายตาขึ้นไปยังวัตถุที่อยู่สูงกว่า เช่น มองจากพื้นขึ้นไปยอดตึก" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "mt-2.5 rounded-sm border border-line bg-bg-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer list-none items-center justify-between px-3.5 py-3 font-semibold [&::-webkit-details-marker]:hidden",
							children: ["มุมก้ม (Angle of Depression) คืออะไร", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xl text-teal",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-3.5 pb-3.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "มุมที่ก้มหน้ามองจากแนวระดับสายตาลงไปยังวัตถุที่อยู่ต่ำกว่า เช่น มองจากดาดฟ้าตึกลงมายังพื้น" })
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[560px] rounded-md border-2 border-dashed border-gold bg-panel p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "m-0 mb-1 text-navy",
							children: "สูตรลัดก่อนทำข้อสอบ"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-4 text-[0.92rem] text-ink-soft",
							children: "ติ๊กเมื่อทำตามขั้นตอนแต่ละข้อระหว่างทำโจทย์จริง"
						}),
						CHECKLIST.map((txt, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex items-start gap-2.5 border-b border-line py-2.5 last:border-b-0", checklist[i] && "text-ink-soft line-through"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: `chk-${i}`,
								type: "checkbox",
								className: "mt-1 size-[19px] accent-teal",
								checked: !!checklist[i],
								onChange: (e) => toggleChecklist(i, e.target.checked)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: `chk-${i}`,
								className: "cursor-pointer",
								children: txt
							})]
						}, txt))
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-bg-2 py-11",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[640px] rounded-md bg-navy px-6 py-7 text-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-0 mb-3.5 text-gold",
							children: "สรุปตรีโกณมิติ ม.3 ใน 1 หน้า"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-2 text-cream",
							children: "สูตรหลัก"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "sin θ = ด้านตรงข้าม / ด้านตรงข้ามมุมฉาก"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "cos θ = ด้านประชิด / ด้านตรงข้ามมุมฉาก"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "tan θ = ด้านตรงข้าม / ด้านประชิด"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-5 mb-2 text-cream",
							children: "พีทาโกรัส"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "a² + b² = c²"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-5 mb-2 text-cream",
							children: "การหามุม"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "θ = sin⁻¹( ข้าม / ฉาก )"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "θ = cos⁻¹( ชิด / ฉาก )"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "eqline bg-white/10 text-cream",
							children: "θ = tan⁻¹( ข้าม / ชิด )"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "py-10 text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "lg",
					onClick: () => setPage("quiz"),
					children: "ไปทำแบบทดสอบ 30 ข้อ"
				})
			})
		]
	});
}
var firebaseConfig = {
	apiKey: "AIzaSyCa_JJkOJRXa8HwlWPNNi8V2Dv1vj2gpZM",
	authDomain: "match-9f855.firebaseapp.com",
	databaseURL: "https://match-9f855-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "match-9f855",
	storageBucket: "match-9f855.firebasestorage.app",
	messagingSenderId: "867935849534",
	appId: "1:867935849534:web:0a67003a36e07a591f156f"
};
function getAppInstance() {
	if (typeof window === "undefined") return null;
	return getApps().length ? getApp() : initializeApp(firebaseConfig);
}
function getDb() {
	const app = getAppInstance();
	if (!app) return null;
	return getDatabase(app);
}
function clean(value) {
	return JSON.parse(JSON.stringify(value));
}
async function pushSubmission(data) {
	const db = getDb();
	if (!db) return {
		ok: false,
		error: "ไม่พร้อมเชื่อมต่อคลาวด์"
	};
	try {
		return {
			ok: true,
			id: (await push(ref(db, "submissions"), clean(data))).key ?? void 0
		};
	} catch (e) {
		return {
			ok: false,
			error: e instanceof Error ? e.message : "ส่งข้อมูลไม่สำเร็จ"
		};
	}
}
async function saveExamConfig(config) {
	const db = getDb();
	if (!db) return {
		ok: false,
		error: "ไม่พร้อมเชื่อมต่อคลาวด์"
	};
	try {
		await set(ref(db, "exam"), clean({
			...config,
			updatedAt: Date.now()
		}));
		return { ok: true };
	} catch (e) {
		return {
			ok: false,
			error: e instanceof Error ? e.message : "บันทึกการตั้งค่าไม่สำเร็จ"
		};
	}
}
async function clearCloudSubmissions() {
	const db = getDb();
	if (!db) return {
		ok: false,
		error: "ไม่พร้อมเชื่อมต่อคลาวด์"
	};
	try {
		await remove(ref(db, "submissions"));
		return { ok: true };
	} catch (e) {
		return {
			ok: false,
			error: e instanceof Error ? e.message : "ลบข้อมูลคลาวด์ไม่สำเร็จ"
		};
	}
}
function subscribeExam(cb) {
	const db = getDb();
	if (!db) {
		cb(null, "offline");
		return () => {};
	}
	return onValue(ref(db, "exam"), (snap) => {
		cb(snap.val() ?? null);
	}, (err) => cb(null, err.message));
}
function subscribeSubmissions(cb) {
	const db = getDb();
	if (!db) {
		cb([], "offline");
		return () => {};
	}
	return onValue(ref(db, "submissions"), (snap) => {
		const val = snap.val();
		const items = val ? Object.entries(val).map(([id, v]) => ({
			id,
			...v
		})) : [];
		items.sort((a, b) => (b.submittedAt || 0) - (a.submittedAt || 0));
		cb(items.slice(0, 50));
	}, (err) => cb([], err.message));
}
var LETTERS$1 = [
	"ก",
	"ข",
	"ค",
	"ง"
];
function QuizPage() {
	const store = useTrigo();
	const questions = (0, import_react.useMemo)(() => getActiveQuestions({
		customQuestions: store.customQuestions,
		quizCount: store.quizCount,
		submitted: store.submitted,
		totalAtSubmission: store.totalAtSubmission
	}), [
		store.customQuestions,
		store.quizCount,
		store.submitted,
		store.totalAtSubmission
	]);
	const total = questions.length;
	const current = Math.min(store.current, Math.max(0, total - 1));
	const item = questions[current];
	const answeredCount = Object.keys(store.answers).length;
	const pct = total ? Math.round(answeredCount / total * 100) : 0;
	const [confirmOpen, setConfirmOpen] = (0, import_react.useState)(false);
	const [now, setNow] = (0, import_react.useState)(Date.now());
	const [sending, setSending] = (0, import_react.useState)(false);
	const sendingRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (store.submitted) return;
		if (!store.timerMinutes || store.timerMinutes <= 0) {
			if (store.deadline !== null) store.setDeadline(null);
			return;
		}
		if (!store.deadline || store.deadline <= Date.now()) store.setDeadline(Date.now() + store.timerMinutes * 6e4);
	}, [store.timerMinutes, store.submitted]);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const remainMs = store.deadline && !store.submitted ? store.deadline - now : null;
	const timedOut = remainMs !== null && remainMs <= 0;
	(0, import_react.useEffect)(() => {
		if (timedOut && !store.submitted && !sending) {
			toast.message("หมดเวลาทำข้อสอบ ระบบส่งคำตอบให้อัตโนมัติ");
			doSubmit();
		}
	}, [timedOut]);
	async function doSubmit() {
		if (sendingRef.current || useTrigo.getState().submitted) return;
		sendingRef.current = true;
		setSending(true);
		const draft = {
			name: store.name || "ไม่ระบุชื่อ",
			studentClass: store.studentClass || "-",
			studentNo: store.studentNo || "-",
			score: 0,
			total,
			percent: 0,
			submittedAt: Date.now()
		};
		const result = store.gradeAndSubmit(false);
		const cloud = await pushSubmission({
			...draft,
			name: result.name,
			studentClass: result.studentClass,
			studentNo: result.studentNo,
			score: result.score,
			total: result.total,
			percent: result.percent,
			submittedAt: result.submittedAt,
			breakdown: result.breakdown
		});
		if (cloud.ok) {
			useTrigo.setState({
				cloudSent: true,
				cloudError: null
			});
			toast.success("ส่งผลสอบถึงแอดมินแล้ว");
		} else {
			useTrigo.setState({
				cloudSent: false,
				cloudError: cloud.error ?? "ส่งไม่สำเร็จ"
			});
			toast.error("บันทึกผลบนเครื่องนี้แล้ว แต่ส่งถึงแอดมินไม่สำเร็จ");
		}
		setSending(false);
		sendingRef.current = false;
		setConfirmOpen(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	if (!item) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mx-auto max-w-[840px] px-5 py-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-ink-soft",
			children: "ยังไม่มีข้อสอบในคลัง"
		})
	});
	const remainSec = remainMs !== null ? Math.max(0, Math.ceil(remainMs / 1e3)) : null;
	const mm = remainSec !== null ? Math.floor(remainSec / 60) : 0;
	const ss = remainSec !== null ? remainSec % 60 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "แบบทดสอบ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-7 text-ink-soft",
				children: "ทำให้ครบทุกข้อก่อนกดส่งคำตอบ ระบบจะไม่แสดงถูก/ผิดจนกว่าจะส่งคำตอบทั้งหมด"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md border border-line bg-panel p-6 shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5 flex flex-wrap items-baseline justify-between gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-bold text-navy",
								children: [
									"ข้อ ",
									current + 1,
									" / ",
									total
								]
							}),
							store.deadline && !store.submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: cn("rounded-full bg-gold-soft px-3 py-1 text-[0.92rem] font-bold text-[#8a5e10] dark:text-gold", remainSec !== null && remainSec <= 60 && "bg-bad-soft text-bad"),
								children: [
									String(mm).padStart(2, "0"),
									":",
									String(ss).padStart(2, "0")
								]
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-[0.9rem] text-ink-soft",
								children: [
									"ทำไปแล้ว ",
									pct,
									"%"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-5 h-2.5 overflow-hidden rounded-full bg-bg-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full transition-[width] duration-200",
							style: {
								width: `${pct}%`,
								background: "linear-gradient(90deg, var(--teal), var(--gold))"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2.5 inline-block rounded-full bg-teal-soft px-2.5 py-1 text-[0.78rem] font-bold text-teal",
						children: item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "โจทย์เพิ่มเติม"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 mb-4 text-[1.12rem] font-semibold text-ink",
						children: [
							current + 1,
							". ",
							item.q
						]
					}),
					item.tri ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleDiagram, {
						opp: item.tri[0] || "",
						adj: item.tri[1] || "",
						hyp: item.tri[2] || ""
					}) : null,
					item.type === "written" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "mb-2.5",
						placeholder: "พิมพ์คำตอบที่ได้จากการคำนวณ",
						value: store.answers[current] !== void 0 ? String(store.answers[current]) : "",
						onChange: (e) => store.setAnswer(current, e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3.5 text-[0.88rem] text-ink-soft",
						children: item.numeric ? "ตอบเป็นตัวเลข" : "พิมพ์คำตอบเป็นข้อความให้ตรงกับที่คำนวณได้"
					})] }) : (item.choices ?? []).map((choiceText, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: cn("mb-2.5 flex w-full items-center rounded-sm border-[1.5px] border-line bg-bg-2 px-4 py-3 text-left text-base text-ink transition-colors duration-150 hover:border-teal", store.answers[current] === idx && "border-teal bg-teal-soft font-bold"),
						onClick: () => store.setAnswer(current, idx),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("mr-2.5 inline-flex size-[26px] shrink-0 items-center justify-center rounded-full border-[1.5px] border-line bg-panel text-[0.85rem] font-bold", store.answers[current] === idx && "border-teal bg-teal text-white"),
							children: LETTERS$1[idx]
						}), choiceText]
					}, idx)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex flex-wrap justify-between gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								disabled: current === 0,
								onClick: () => store.setCurrent(current - 1),
								children: "ย้อนกลับ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1" }),
							current === total - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								disabled: sending,
								onClick: () => setConfirmOpen(true),
								children: sending ? "กำลังส่ง..." : "ส่งคำตอบ"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								onClick: () => store.setCurrent(current + 1),
								children: "ถัดไป"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid grid-cols-6 gap-1.5 sm:grid-cols-10",
						children: questions.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => store.setCurrent(i),
							className: cn("aspect-square rounded-sm border border-line bg-bg-2 text-[0.85rem] text-ink-soft", store.answers[i] !== void 0 && "border-teal bg-teal-soft font-bold text-teal", i === current && "outline-2 outline-offset-1 outline-gold"),
							children: i + 1
						}, i))
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: confirmOpen,
				onOpenChange: setConfirmOpen,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "ยืนยันการส่งคำตอบ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: answeredCount < total ? `คุณตอบไปแล้ว ${answeredCount} จาก ${total} ข้อ ยังไม่ครบทุกข้อ ต้องการส่งคำตอบเลยหรือไม่?` : "คุณต้องการส่งคำตอบหรือไม่? ผลสอบจะถูกส่งถึงแอดมิน" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-end gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => setConfirmOpen(false),
							children: "ยกเลิก"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							disabled: sending,
							onClick: () => void doSubmit(),
							children: "ยืนยัน"
						})]
					})
				] })
			})
		]
	});
}
function gradeLabel(pct) {
	if (pct >= 90) return {
		text: "ยอดเยี่ยม",
		cls: "bg-good-soft text-good"
	};
	if (pct >= 75) return {
		text: "ดีมาก",
		cls: "bg-teal-soft text-teal"
	};
	if (pct >= 60) return {
		text: "ผ่านเกณฑ์",
		cls: "bg-gold-soft text-[#8a5e10] dark:text-gold"
	};
	return {
		text: "ควรทบทวนพื้นฐานเพิ่มเติม",
		cls: "bg-bad-soft text-bad"
	};
}
function ResultsPage() {
	const store = useTrigo();
	if (!store.submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "ผลคะแนน"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-ink-soft",
				children: "คุณยังไม่ได้ส่งคำตอบแบบทดสอบ กรุณาทำแบบทดสอบและกด \"ส่งคำตอบ\" ก่อน"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: () => store.setPage("quiz"),
				children: "ไปทำแบบทดสอบ"
			})
		]
	});
	const total = store.totalAtSubmission || 30;
	const score = store.score ?? 0;
	const pct = Math.round(score / total * 100);
	const g = gradeLabel(pct);
	let nameText = store.name ? `ผู้ทำ: ${store.name}` : "ผู้ทำ: ไม่ระบุชื่อ";
	if (store.studentClass) nameText += ` | ชั้น: ${store.studentClass}`;
	if (store.studentNo) nameText += ` | เลขที่: ${store.studentNo}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "ผลคะแนน"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-7 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0 mb-1.5 text-ink-soft",
						children: nameText
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "result-ring",
						style: { ["--pct"]: pct },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative z-10 text-3xl font-bold text-navy",
							children: score
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative z-10 text-sm text-ink-soft",
							children: ["/ ", total]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `mt-2 inline-block rounded-full px-5 py-2 text-[1.05rem] font-bold ${g.cls}`,
						children: [
							g.text,
							" (",
							score,
							"/",
							total,
							" — ",
							pct,
							"%)"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center justify-center gap-2 text-sm text-ink-soft",
						children: store.cloudSent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-4 text-teal" }), "ส่งผลสอบถึงแอดมินบนคลาวด์แล้ว"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudOff, { className: "size-4 text-bad" }),
							"บันทึกบนเครื่องนี้แล้ว",
							store.cloudError ? ` (${store.cloudError})` : " แต่ยังไม่ถึงแอดมิน"
						] })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3",
				children: Object.values(store.breakdown || {}).map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-sm border border-line bg-panel p-3.5 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[1.3rem] font-bold text-navy",
						children: [
							d.correct,
							"/",
							d.total
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-[0.82rem] text-ink-soft",
						children: d.label
					})]
				}, d.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => store.setPage("answers"),
					children: "ดูเฉลยละเอียดท้ายบท"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					onClick: () => {
						store.restartQuiz();
						toast.success("เริ่มทำแบบทดสอบใหม่แล้ว");
					},
					children: "เริ่มใหม่"
				})]
			})
		]
	});
}
var LETTERS = [
	"ก",
	"ข",
	"ค",
	"ง"
];
function AnswersPage() {
	const store = useTrigo();
	const questions = (0, import_react.useMemo)(() => getActiveQuestions({
		customQuestions: store.customQuestions,
		quizCount: store.quizCount,
		submitted: store.submitted,
		totalAtSubmission: store.totalAtSubmission
	}), [
		store.customQuestions,
		store.quizCount,
		store.submitted,
		store.totalAtSubmission
	]);
	if (!store.submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
			children: "เฉลยแบบละเอียด"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-md border border-dashed border-line bg-panel px-5 py-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mx-auto mb-2.5 size-8 text-ink-soft" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3.5",
					children: "กรุณาส่งคำตอบแบบทดสอบให้ครบก่อน จึงจะดูเฉลยได้"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => store.setPage("quiz"),
					children: "ไปทำแบบทดสอบ"
				})
			]
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "เฉลยแบบละเอียด"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mb-7 text-ink-soft",
				children: [
					"เฉลยทั้ง ",
					questions.length,
					" ข้อ พร้อมวิธีทำทีละขั้นตอนและเหตุผลประกอบ"
				]
			}),
			questions.map((item, idx) => {
				const userAns = store.answers[idx];
				const correct = isAnswerCorrect(item, userAns);
				const noAnswer = userAns === void 0 || userAns === null || String(userAns).trim() === "";
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "mb-4 rounded-md border border-line bg-panel px-[22px] py-5 shadow-[var(--shadow-card)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-2 flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
								className: "m-0 text-navy",
								children: ["ข้อที่ ", idx + 1]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: correct ? "rounded-full bg-good-soft px-3 py-1 text-[0.85rem] font-bold text-good" : "rounded-full bg-bad-soft px-3 py-1 text-[0.85rem] font-bold text-bad",
								children: correct ? "ตอบถูก" : noAnswer ? "ไม่ได้ตอบ" : "ตอบผิด"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "โจทย์:"
							}),
							" ",
							item.q
						] }),
						item.tri ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleDiagram, {
							opp: item.tri[0] || "",
							adj: item.tri[1] || "",
							hyp: item.tri[2] || ""
						}) : null,
						item.type === "written" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "คำตอบที่ถูกต้อง:"
							}),
							" ",
							item.answer
						] }), !noAnswer && !correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "คำตอบที่คุณพิมพ์:"
							}),
							" ",
							String(userAns)
						] }) : null] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "คำตอบที่ถูกต้อง:"
							}),
							" ",
							LETTERS[item.correct ?? 0],
							".",
							" ",
							item.choices?.[item.correct ?? 0]
						] }), !noAnswer && userAns !== item.correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "คำตอบที่คุณเลือก:"
							}),
							" ",
							LETTERS[Number(userAns)],
							".",
							" ",
							item.choices?.[Number(userAns)]
						] }) : null] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.86rem] font-bold text-ink-soft",
							children: "วิธีทำ:"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "list-disc ps-5",
							children: item.steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: s }, s))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[0.86rem] font-bold text-ink-soft",
								children: "เหตุผล:"
							}),
							" ",
							item.why
						] })
					]
				}, idx);
			})
		]
	});
}
var ADMIN_SESSION_KEY = "trig_admin_session_v2";
function emptyQuestion() {
	return {
		q: "",
		type: "mc",
		level: 1,
		choices: [
			"",
			"",
			"",
			""
		],
		correct: 0,
		steps: [],
		why: "",
		answer: "",
		numeric: false,
		tri: [
			"",
			"",
			""
		]
	};
}
function AdminPage() {
	const store = useTrigo();
	const [pass, setPass] = (0, import_react.useState)("");
	const [loginError, setLoginError] = (0, import_react.useState)("");
	const [quizCount, setQuizCount] = (0, import_react.useState)(store.quizCount);
	const [timerMinutes, setTimerMinutes] = (0, import_react.useState)(store.timerMinutes);
	const [newPass1, setNewPass1] = (0, import_react.useState)("");
	const [newPass2, setNewPass2] = (0, import_react.useState)("");
	const [passError, setPassError] = (0, import_react.useState)("");
	const [formOpen, setFormOpen] = (0, import_react.useState)(false);
	const [editingIndex, setEditingIndex] = (0, import_react.useState)(null);
	const [form, setForm] = (0, import_react.useState)(emptyQuestion());
	const [formError, setFormError] = (0, import_react.useState)("");
	const [levelCustom, setLevelCustom] = (0, import_react.useState)("");
	const [levelMode, setLevelMode] = (0, import_react.useState)("1");
	const [cloudStatus, setCloudStatus] = (0, import_react.useState)("offline");
	(0, import_react.useEffect)(() => {
		try {
			if (sessionStorage.getItem(ADMIN_SESSION_KEY) === "1") store.setAdmin(true);
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		setQuizCount(store.quizCount);
		setTimerMinutes(store.timerMinutes);
	}, [store.quizCount, store.timerMinutes]);
	(0, import_react.useEffect)(() => {
		if (!store.isAdmin) return;
		return subscribeSubmissions((items, err) => {
			if (err) {
				setCloudStatus("offline");
				return;
			}
			setCloudStatus("live");
			store.setCloudSubs(items);
		});
	}, [store.isAdmin]);
	function verifyAdmin(actionLabel) {
		const entered = window.prompt("ยืนยันรหัสผ่านแอดมินเพื่อ" + actionLabel);
		if (entered === null) return false;
		if (hashStr(entered) !== store.passHash) {
			toast.error("รหัสผ่านแอดมินไม่ถูกต้อง");
			return false;
		}
		return true;
	}
	function login() {
		if (hashStr(pass) === store.passHash) {
			store.setAdmin(true);
			try {
				sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
			} catch {}
			setPass("");
			setLoginError("");
		} else setLoginError("รหัสผ่านไม่ถูกต้อง กรุณาลองใหม่");
	}
	const pool = getPool(store);
	const history = cloudStatus === "live" && store.cloudSubs.length > 0 ? store.cloudSubs : store.localHistory;
	async function persistExam(patch) {
		const res = await saveExamConfig({
			quizCount: patch?.quizCount ?? store.quizCount,
			timerMinutes: patch?.timerMinutes ?? store.timerMinutes,
			questions: patch && "questions" in patch ? patch.questions ?? null : store.customQuestions,
			passHash: patch?.passHash ?? store.passHash
		});
		if (res.ok) toast.success("บันทึกขึ้นคลาวด์แล้ว นักเรียนทุกคนจะเห็นชุดข้อสอบนี้");
		else toast.error(res.error || "บันทึกคลาวด์ไม่สำเร็จ เก็บไว้ในเครื่องนี้ก่อน");
	}
	function openForm(idx) {
		setEditingIndex(idx);
		setFormError("");
		setFormOpen(true);
		if (idx === null) {
			setForm(emptyQuestion());
			setLevelMode("1");
			setLevelCustom("");
			return;
		}
		const item = pool[idx];
		setForm({
			...item,
			type: item.type === "written" ? "written" : "mc",
			choices: item.choices ? [...item.choices] : [
				"",
				"",
				"",
				""
			],
			tri: item.tri ? [...item.tri] : [
				"",
				"",
				""
			]
		});
		if (item.levelLabel) {
			setLevelMode("custom");
			setLevelCustom(item.levelLabel);
		} else {
			setLevelMode(String(item.level || 1));
			setLevelCustom("");
		}
	}
	function saveQuestion() {
		const qText = form.q.trim();
		if (!qText) {
			setFormError("กรุณาพิมพ์โจทย์คำถาม");
			return;
		}
		const steps = (form.steps || []).map((s) => s.trim()).filter(Boolean);
		if (steps.length === 0) {
			setFormError("กรุณาใส่วิธีทำอย่างน้อย 1 ขั้นตอน");
			return;
		}
		const newItem = {
			q: qText,
			steps,
			why: (form.why || "").trim() || "—"
		};
		if (levelMode === "custom") {
			if (!levelCustom.trim()) {
				setFormError("กรุณาใส่ชื่อหมวดหมู่ที่กำหนดเอง");
				return;
			}
			newItem.levelLabel = levelCustom.trim();
			newItem.level = 0;
		} else newItem.level = parseInt(levelMode, 10);
		const opp = form.tri?.[0]?.trim() || "";
		const adj = form.tri?.[1]?.trim() || "";
		const hyp = form.tri?.[2]?.trim() || "";
		if (opp || adj || hyp) newItem.tri = [
			opp,
			adj,
			hyp
		];
		if (form.type === "written") {
			newItem.type = "written";
			const ans = (form.answer || "").trim();
			if (!ans) {
				setFormError("กรุณาใส่คำตอบที่ถูกต้อง");
				return;
			}
			newItem.answer = ans;
			newItem.numeric = !!form.numeric;
			if (newItem.numeric) {
				newItem.tolerance = form.tolerance ?? .05;
				if (Number.isNaN(parseFloat(ans))) {
					setFormError("คำตอบต้องเป็นตัวเลขเมื่อเลือก \"เป็นคำตอบตัวเลข\"");
					return;
				}
			}
		} else {
			newItem.type = "mc";
			const choices = (form.choices || []).map((c) => c.trim());
			if (choices.length < 4 || choices.some((c) => !c)) {
				setFormError("กรุณากรอกตัวเลือกให้ครบทั้ง 4 ข้อ");
				return;
			}
			if (new Set(choices).size < 4) {
				setFormError("ตัวเลือกทั้ง 4 ข้อต้องไม่ซ้ำกัน");
				return;
			}
			newItem.choices = choices;
			newItem.correct = form.correct ?? 0;
		}
		const next = [...store.customQuestions ?? DEFAULT_QUESTIONS];
		if (editingIndex !== null) next[editingIndex] = newItem;
		else next.push(newItem);
		let count = store.quizCount;
		if (editingIndex === null && count === DEFAULT_QUESTIONS.length) count = next.length;
		if (count > next.length) count = Math.max(1, next.length);
		store.setCustomQuestions(next);
		store.setExamSettings(count, store.timerMinutes);
		setFormOpen(false);
		setEditingIndex(null);
		toast.success(editingIndex !== null ? "บันทึกการแก้ไขโจทย์แล้ว" : "เพิ่มโจทย์ใหม่แล้ว");
		persistExam({
			questions: next,
			quizCount: count
		});
	}
	if (!store.isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "จัดการข้อสอบ (สำหรับแอดมิน)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-ink-soft",
				children: "แก้ไขโจทย์ จำนวนข้อ เวลาสอบ และดูผลคะแนนของนักเรียนที่ส่งเข้ามาจากทุกเครื่อง"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-[380px] rounded-md border border-line bg-panel p-6 text-center shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "mx-auto mb-2 size-8 text-ink-soft" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "m-0",
						children: "กรุณาใส่รหัสผ่านแอดมินเพื่อเข้าใช้งาน"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "password",
						className: "my-3",
						placeholder: "รหัสผ่านแอดมิน",
						autoComplete: "off",
						value: pass,
						onChange: (e) => setPass(e.target.value),
						onKeyDown: (e) => {
							if (e.key === "Enter") login();
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						className: "w-full",
						onClick: login,
						children: "เข้าสู่ระบบ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 min-h-[1.2em] text-[0.88rem] text-bad",
						children: loginError
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[840px] px-5 py-9 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "m-0 mb-1.5 text-[1.55rem] font-bold text-navy",
				children: "จัดการข้อสอบ (สำหรับแอดมิน)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-6 text-ink-soft",
				children: "แก้ไขโจทย์ จำนวนข้อ เวลาสอบ และดูประวัติผลคะแนนของนักเรียนได้จากหน้านี้"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-5 flex flex-wrap items-center justify-between gap-2.5 rounded-sm bg-navy px-4 py-3 text-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex flex-wrap items-center gap-2",
					children: ["เข้าสู่ระบบแอดมินแล้ว", cloudStatus === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-sm text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cloud, { className: "size-4" }), " คลาวด์เชื่อมต่อแล้ว"]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1 text-sm text-gold-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudOff, { className: "size-4" }), " ยังไม่ถึงคลาวด์"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "quiet",
					size: "sm",
					onClick: () => {
						store.setAdmin(false);
						try {
							sessionStorage.removeItem(ADMIN_SESSION_KEY);
						} catch {}
						toast.success("ออกจากระบบแอดมินแล้ว");
					},
					children: "ออกจากระบบ"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-3.5 text-[1.1rem] text-navy",
						children: "ตั้งค่าการสอบ"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap items-end gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "จำนวนข้อที่ใช้จริงในชุดข้อสอบ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 1,
									value: quizCount,
									onChange: (e) => setQuizCount(parseInt(e.target.value, 10) || 1)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "เวลาทำข้อสอบ (นาที, 0 = ไม่จำกัดเวลา)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "number",
									min: 0,
									value: timerMinutes,
									onChange: (e) => setTimerMinutes(parseInt(e.target.value, 10) || 0)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								onClick: () => {
									const cnt = Math.min(Math.max(1, quizCount), pool.length);
									const mins = Math.max(0, timerMinutes);
									store.setExamSettings(cnt, mins);
									persistExam({
										quizCount: cnt,
										timerMinutes: mins
									});
								},
								children: "บันทึกการตั้งค่า"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "m-0 text-[0.85rem] text-ink-soft",
						children: [
							"คลังโจทย์ปัจจุบันมีทั้งหมด ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: pool.length }),
							" ข้อ"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-3.5 text-[1.1rem] text-navy",
						children: "เปลี่ยนรหัสผ่านแอดมิน"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "รหัสผ่านใหม่" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									value: newPass1,
									onChange: (e) => setNewPass1(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ยืนยันรหัสผ่านใหม่" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									type: "password",
									value: newPass2,
									onChange: (e) => setNewPass2(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								onClick: () => {
									if (!newPass1 || newPass1.length < 4) {
										setPassError("รหัสผ่านใหม่ต้องมีอย่างน้อย 4 ตัวอักษร");
										return;
									}
									if (newPass1 !== newPass2) {
										setPassError("รหัสผ่านใหม่ทั้งสองช่องไม่ตรงกัน");
										return;
									}
									const h = hashStr(newPass1);
									store.setPassHash(h);
									setNewPass1("");
									setNewPass2("");
									setPassError("");
									toast.success("เปลี่ยนรหัสผ่านแอดมินเรียบร้อยแล้ว");
									persistExam({ passHash: h });
								},
								children: "เปลี่ยนรหัสผ่าน"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 min-h-[1.2em] text-[0.88rem] text-bad",
						children: passError
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-2 text-[1.1rem] text-navy",
						children: "ประวัติผลสอบของนักเรียนที่ส่งเข้ามา"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[0.88rem] text-ink-soft",
						children: "ผลสอบชื่อ ชั้น เลขที่ และคะแนน จากทุกเครื่องที่ส่งเข้ามา (สูงสุด 50 รายการล่าสุด)"
					}),
					history.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "py-2 text-[0.9rem] text-ink-soft",
						children: "ยังไม่มีประวัติผลสอบที่บันทึกไว้"
					}) : history.map((item, idx) => {
						const d = new Date(item.submittedAt || Date.now());
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 rounded-sm border border-line bg-bg-2 px-3 py-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-bold text-ink",
								children: [
									idx + 1,
									". ",
									item.name,
									" (ชั้น ",
									item.studentClass,
									" เลขที่",
									" ",
									item.studentNo,
									") — ",
									item.score,
									"/",
									item.total,
									" (",
									item.percent,
									"%)"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-0.5 text-[0.82rem] text-ink-soft",
								children: [
									"วันที่ทำสอบ: ",
									d.toLocaleString("th-TH"),
									cloudStatus === "live" ? " · คลาวด์" : " · เครื่องนี้"
								]
							})]
						}, item.id || idx);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "danger",
							onClick: async () => {
								if (!verifyAdmin("ลบข้อมูลผลสอบทั้งหมด")) return;
								if (!window.confirm("ลบข้อมูลผลสอบที่บันทึกไว้ทั้งหมดหรือไม่?")) return;
								store.clearLocalHistory();
								const res = await clearCloudSubmissions();
								if (res.ok) toast.success("ลบประวัติผลสอบทั้งหมดแล้ว");
								else toast.error(res.error || "ลบคลาวด์ไม่สำเร็จ");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" }), "ลบข้อมูลผลสอบทั้งหมด"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-3.5 text-[1.1rem] text-navy",
						children: "คลังโจทย์"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3.5 flex flex-wrap gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: () => openForm(null),
							children: "เพิ่มโจทย์ใหม่"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "outline",
							onClick: () => {
								if (!verifyAdmin("กู้คืนชุดข้อสอบเริ่มต้น")) return;
								store.setCustomQuestions(null);
								store.setExamSettings(DEFAULT_QUESTIONS.length, store.timerMinutes);
								toast.success("กู้คืนชุดข้อสอบเริ่มต้น 30 ข้อแล้ว");
								persistExam({
									questions: null,
									quizCount: DEFAULT_QUESTIONS.length
								});
							},
							children: "กู้คืนชุดข้อสอบเริ่มต้น (30 ข้อ)"
						})]
					}),
					pool.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex items-center justify-between gap-2.5 rounded-sm border border-line bg-bg-2 px-3.5 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "truncate font-semibold text-ink",
								children: [
									idx + 1,
									". ",
									item.q
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[0.82rem] text-ink-soft",
								children: [
									item.type === "written" ? "อัตนัย" : "ปรนัย",
									" ·",
									" ",
									item.levelLabel || LEVEL_NAMES[item.level ?? 0] || "อื่น ๆ"
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "outline",
								size: "sm",
								onClick: () => openForm(idx),
								children: "แก้ไข"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "danger",
								size: "sm",
								onClick: () => {
									if (!window.confirm("ต้องการลบโจทย์ข้อนี้หรือไม่?")) return;
									if (!verifyAdmin("ลบโจทย์ข้อนี้")) return;
									const next = [...store.customQuestions ?? DEFAULT_QUESTIONS];
									next.splice(idx, 1);
									const count = Math.min(store.quizCount, Math.max(1, next.length));
									store.setCustomQuestions(next);
									store.setExamSettings(count, store.timerMinutes);
									toast.success("ลบโจทย์แล้ว");
									persistExam({
										questions: next,
										quizCount: count
									});
								},
								children: "ลบ"
							})]
						})]
					}, idx))
				]
			}),
			formOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mb-5 rounded-md border border-line bg-panel p-[22px] shadow-[var(--shadow-card)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-0 mb-3.5 text-[1.1rem] text-navy",
						children: editingIndex !== null ? `แก้ไขโจทย์ข้อที่ ${editingIndex + 1}` : "เพิ่มโจทย์ใหม่"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex max-w-[180px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ประเภทข้อสอบ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink",
									value: form.type === "written" ? "written" : "mc",
									onChange: (e) => setForm({
										...form,
										type: e.target.value === "written" ? "written" : "mc"
									}),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "mc",
										children: "ปรนัย (เลือกตอบ 4 ตัวเลือก)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "written",
										children: "อัตนัย (พิมพ์คำตอบ)"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex max-w-[220px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "หมวดหมู่ / ระดับ" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
									className: "h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink",
									value: levelMode,
									onChange: (e) => setLevelMode(e.target.value),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "1",
											children: "พื้นฐานตรีโกณมิติ"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "2",
											children: "sin cos tan"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "3",
											children: "หาความยาวด้าน"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "4",
											children: "หามุม"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "5",
											children: "พีทาโกรัส + ตรีโกณมิติ"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "6",
											children: "โจทย์ประยุกต์"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "custom",
											children: "กำหนดเอง..."
										})
									]
								})]
							}),
							levelMode === "custom" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ชื่อหมวดหมู่ที่กำหนดเอง" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: levelCustom,
									onChange: (e) => setLevelCustom(e.target.value)
								})]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "โจทย์คำถาม" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "mt-1.5",
							value: form.q,
							onChange: (e) => setForm({
								...form,
								q: e.target.value
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ป้ายกำกับด้านตรงข้าม" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "เช่น ตรงข้าม = 3",
									value: form.tri?.[0] || "",
									onChange: (e) => setForm({
										...form,
										tri: [
											e.target.value,
											form.tri?.[1] || "",
											form.tri?.[2] || ""
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ป้ายกำกับด้านประชิด" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "เช่น ประชิด = 4",
									value: form.tri?.[1] || "",
									onChange: (e) => setForm({
										...form,
										tri: [
											form.tri?.[0] || "",
											e.target.value,
											form.tri?.[2] || ""
										]
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ป้ายกำกับด้านตรงข้ามมุมฉาก" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									placeholder: "เช่น ตรงข้ามมุมฉาก = 5",
									value: form.tri?.[2] || "",
									onChange: (e) => setForm({
										...form,
										tri: [
											form.tri?.[0] || "",
											form.tri?.[1] || "",
											e.target.value
										]
									})
								})]
							})
						]
					}),
					form.type === "written" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex min-w-[140px] flex-1 flex-col gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "คำตอบที่ถูกต้อง" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: form.answer || "",
								onChange: (e) => setForm({
									...form,
									answer: e.target.value
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "เป็นคำตอบตัวเลข?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								className: "h-11 rounded-sm border border-line bg-bg-2 px-3 text-ink",
								value: form.numeric ? "1" : "0",
								onChange: (e) => setForm({
									...form,
									numeric: e.target.value === "1"
								}),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "0",
									children: "ไม่ใช่ (เทียบข้อความ)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "1",
									children: "ใช่ (เทียบตัวเลข)"
								})]
							})]
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "ตัวเลือกคำตอบ (เลือกวงกลมหน้าข้อที่ถูก)" }), [
							0,
							1,
							2,
							3
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "qfCorrect",
								className: "size-[18px] accent-teal",
								checked: (form.correct ?? 0) === i,
								onChange: () => setForm({
									...form,
									correct: i
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								placeholder: `ตัวเลือก ${[
									"ก",
									"ข",
									"ค",
									"ง"
								][i]}`,
								value: form.choices?.[i] || "",
								onChange: (e) => {
									const choices = [...form.choices || [
										"",
										"",
										"",
										""
									]];
									choices[i] = e.target.value;
									setForm({
										...form,
										choices
									});
								}
							})]
						}, i))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "วิธีทำ (พิมพ์ทีละขั้นตอน 1 บรรทัดต่อ 1 ขั้น)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "mt-1.5 min-h-[100px]",
							value: (form.steps || []).join("\n"),
							onChange: (e) => setForm({
								...form,
								steps: e.target.value.split("\n")
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "เหตุผลที่เลือกใช้สูตรนี้" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							className: "mt-1.5",
							value: form.why,
							onChange: (e) => setForm({
								...form,
								why: e.target.value
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-[1.2em] text-[0.88rem] text-bad",
						children: formError
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3.5 flex flex-wrap gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: saveQuestion,
							children: "บันทึกโจทย์นี้"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "quiet",
							onClick: () => {
								setFormOpen(false);
								setEditingIndex(null);
							},
							children: "ยกเลิก"
						})]
					})
				]
			}) : null
		]
	});
}
function TrigoApp() {
	const page = useTrigo((s) => s.page);
	const theme = useTrigo((s) => s.theme);
	const applyExam = useTrigo((s) => s.applyExam);
	(0, import_react.useEffect)(() => {
		Promise.resolve(useTrigo.persist.rehydrate()).then(() => {
			const t = useTrigo.getState().theme;
			document.documentElement.classList.toggle("dark", t === "dark");
		});
		return subscribeExam((config) => {
			if (config) applyExam(config);
		});
	}, [applyExam]);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-bg text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppNav, {}),
			page === "cover" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, {}) : null,
			page === "lesson" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LessonPage, {}) : null,
			page === "quiz" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizPage, {}) : null,
			page === "results" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultsPage, {}) : null,
			page === "answers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnswersPage, {}) : null,
			page === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminPage, {}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-navy-2 px-5 py-8 text-center text-[#d9d0bc]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "m-0",
					children: "สื่อการเรียนรู้คณิตศาสตร์ ม.3 เรื่อง ตรีโกณมิติ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 mb-0",
					children: "จัดทำเพื่อการศึกษา"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				richColors: true,
				position: "bottom-center"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrigoApp, {});
}
//#endregion
export { Home as component };
