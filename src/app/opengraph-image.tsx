import { ImageResponse } from "next/og";
export const alt = "Emily A. West — How do humans build better explanations?";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() { return new ImageResponse(<div style={{ width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#f5f2eb",color:"#20231f",padding:"64px 72px",fontFamily:"serif" }}><div style={{ display:"flex",justifyContent:"space-between",fontFamily:"sans-serif",fontSize:22,letterSpacing:2,textTransform:"uppercase" }}><span>Emily A. West</span><span style={{color:"#9b3d2f"}}>University of Pittsburgh</span></div><div style={{fontSize:72,lineHeight:1.04,maxWidth:1000,letterSpacing:-3}}>How do humans build better explanations?</div><div style={{width:"100%",height:2,background:"#9b3d2f"}}/></div>, size); }
