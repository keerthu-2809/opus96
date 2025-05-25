// components/PriceConfiguration.tsx
import { useModal } from "@/app/context/ModalContext";
import React from "react";
import "./PriceConfiguration.css";

const PriceConfiguration: React.FC = () => {
  const { openModal } = useModal();
  
  return (
    <div className="div5" id="price-config">
      <br /><br />
      <h1 className="gradient_header2">PRICE CONFIGURATION</h1>

      <div className="col-md-10 mx-auto my-5">
        <table className="table table-bordered table-hover text-center">
          <thead className="table-dark">
            <tr>
              <th>TYPE</th>
              <th>SCALABLE AREA</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Plot</td>
              <td>600 Sq.Ft.</td>
              <td>33 Lakhs* Onwards</td>
              <td>
                <button  onClick={openModal} className="btn enquire_btn" data-bs-toggle="modal" data-bs-target="#priceModal">
                  PRICE BREAKUP
                </button>
              </td>
            </tr>
            <tr>
              <td>Plot</td>
              <td>1200 Sq.Ft.</td>
              <td>66 Lakhs* Onwards</td>
              <td>
                <button  onClick={openModal} className="btn enquire_btn" data-bs-toggle="modal" data-bs-target="#priceModal">
                  PRICE BREAKUP
                </button>
              </td>
            </tr>
            <tr>
              <td>Plot</td>
              <td>2400 Sq.Ft.</td>
              <td>1.32 Cr* Onwards</td>
              <td>
                <button  onClick={openModal} className="btn enquire_btn" data-bs-toggle="modal" data-bs-target="#priceModal">
                  PRICE BREAKUP
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceConfiguration;
