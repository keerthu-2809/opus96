import './SixDivLayout.css';
import { useModal } from "@/app/context/ModalContext";


export default function SixDivLayout() {
  const { openModal } = useModal();
    return (
        <div className="six-div-wrapper" id = "genius-block">
             <button onClick={openModal} className="six-div-button">Genius Block</button>

{/* Subtitle */}
<h3 className="six-div-subtitle">An Exclusive Space for Kids to</h3>

{/* Main Title */}
<h1 className="six-div-title">LEARN, THRIVE AND CONNECT</h1>

{/* Paragraph */}
<p className="six-div-description">
Opus96 offers dedicated and innovative learning spaces that offer a variety
of classes and activities for all ages.
</p>

      <div className="six-div-grid">
          {/* First Row */}
          <div className="card1">
            <img src="/images/kids-icon1.png" alt="Tuition" className="icon1" />
            <h2 className="title">Tuition Classes</h2>
          </div>
          <div className="card1">
            <img src="/images/kids-icon2.png" alt="Music" className="icon1" />
            <h2 className="title">Music Classes</h2>
          </div>
          <div className="card1">
            <img src="/images/kids-icon3.png" alt="Dance" className="icon1" />
            <h2 className="title">Dance Classes</h2>
          </div>
  
          {/* Second Row */}
          <div></div> {/* Empty div to push center card1 */}
          <div className="card1">
            <img src="/images/kids-icon4.png" alt="Robotics" className="icon1" />
            <h2 className="title">Robotics Classes</h2>
          </div>
          <div></div> {/* Empty div to push center card1 */}
  
          {/* Third Row */}
          <div className="card1">
            <img src="/images/kids-icon5.png" alt="Cooking" className="icon1" />
            <h2 className="title">Cooking Classes</h2>
          </div>
          <div className="card1">
            <img src="/images/kids-icon6.png" alt="Daycare" className="icon1" />
            <h2 className="title">Day Care/Crèche</h2>
          </div>
          <div></div> {/* (optional) or add another card1 */}
          
        </div>
      </div>
    );
  }
  