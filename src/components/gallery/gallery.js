import React, { useState } from "react";

import "./style.css";
import Modal from "react-awesome-modal";
import Rodal from "rodal";
import GalleryFolder from "../Galley-Folders/folder.js";
// include styles

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.rememberMe = JSON.parse(localStorage.getItem("Folder"));
    if (this.rememberMe) {
      this.state = {
        currentAddress: "",
        visible: false,
        visible2: false,
        Folders: this.rememberMe,
      };
    } else {
      this.state = {
        currentAddress: "",
        visible: false,
        visible2: false,
        Folders: {},
      };
    }
  }
  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  openModal2() {
    if (!this.state.currentAddress) {
      alert(`Please Enter Url ${String.fromCodePoint(128554)}`);
      return;
    }
    let isimage = 0
    fetch(this.state.currentAddress, { method: "HEAD" })
      .then((res) => {
        if (res.ok) {
          if (Object.keys(this.state.Folders).length === 0) {
            this.openModal();
            return;
          }
          this.setState({
            visible2: true,
          });
          if (Object.keys(this.state.Folders).length === 0) {
   
            this.setState({
              visible: true,
          });
          }
        }
      })
      .catch((err) => {
        isimage = 1
        this.setState({
          visible2: false,
        });
        this.setState({
          currentAddress: " ",
        });
        if (isimage == 1) {
          alert(`Url Does not Exist..${String.fromCodePoint(128549)}`);
          return;
        }
      });
    
      return;
    }
    // 
  

  closeModal2() {
    this.setState({
      visible2: false,
    });
  }

  FolderSelect = (fol) => {
    
    const lol = { ...this.state.Folders };
   
    lol[fol].push(this.state.currentAddress);

    this.setState({
      Folders: lol,
      currentAddress: "",
    });
    localStorage.setItem("Folder", JSON.stringify(lol));

    this.closeModal2();
  };
  onaddFolder = (event) => {
    const FolderName = document.getElementById("input-folder").value;

    const f = { ...this.state.Folders };

    if (!FolderName) {
      alert("Please Enter Valid Folder Name");
      return;
    }
    if (
      Object.keys(f).find((x) => {
        return x == FolderName;
      })
    ) {
      alert("Please Enter Other Name");
      return;
    }

    f[FolderName] = [];
    if (Object.keys(f).length === 1 && this.state.currentAddress) {
      f[FolderName].push(this.state.currentAddress);
    }
    this.setState({
      Folders: f,
      currentAddress: "",
    });
    console.log(f);
    localStorage.setItem("Folder", JSON.stringify(f));

    this.closeModal();
    document.getElementById("input-folder").value = "";
  };

  onaddressChange = (event) => {
    this.setState({
      currentAddress: event.target.value,
    });
  };
  ondelete = (event1, event2) => {
    console.log(event1, event2);
    let vt = { ...this.state.Folders };

    vt[event1].splice(event2, 1);
    this.setState({
      Folders: vt,
    });
    localStorage.setItem("Folder", JSON.stringify(vt));
  };
  FolderDelete = (event) => {
    const pro = { ...this.state.Folders };

    if (pro[event].length != 0) {
      if (
        window.confirm("Do you Really Want To Permanently Delete The Folder")
      ) {
        delete pro[event];
        this.setState({
          Folders: pro,
        });
        localStorage.setItem("Folder", JSON.stringify(pro));
      }
    } else {
      delete pro[event];
      this.setState({
        Folders: pro,
      });
      localStorage.setItem("Folder", JSON.stringify(pro));
    }
  };
  render = () => {
    return (
      <div className="root-container">
        <p className="heading">
          <div class="clip-text clip-text_one">Image Gallery</div>
        </p>
        <div className="input-box">
          <input
            onChange={this.onaddressChange}
            value={this.state.currentAddress}
            type="text"
            className="enter"
            placeholder="Enter Image Url"
          ></input>
          <button onClick={() => this.openModal2()} className="add-btn">
            Add
          </button>
          <button onClick={() => this.openModal()} className="add-btn-2">
            Create New Folder
          </button>
          <Modal
            visible={this.state.visible2}
            width="400"
            height="330"
            effect="fadeInLeft"
            onClickAway={() => this.closeModal2()}
            className="Modal2"
          >
            <div className="add-btn-div">
              <h3>Add to...</h3>
              <div className="content">
                <ul id="list">
                  {Object.keys(this.state.Folders).map((fol) => {
                    return (
                      <li className="item" id={fol} onClick={()=>this.FolderSelect(fol)}>
                        <i class="fa fa-folder fa-2x"></i>
                        <p>{fol}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Modal>

          <Modal
            visible={this.state.visible}
            width="400"
            height="150"
            effect="fadeInDown"
            onClickAway={() => this.closeModal()}
            className="Modal"
          >
            <div className="create">
              <input
                id="input-folder"
                type="text"
                placeholder="Enter Folder Name"
                className="enter2"
              ></input>

              <i
                onClick={this.onaddFolder}
                className="fa fa-folder-open fa-2x"
                aria-hidden="true"
              ></i>
            </div>
          </Modal>
        </div>
        <div className="cards">
          {Object.keys(this.state.Folders).map((Fol) => {
            return (
              <GalleryFolder
                delete={this.ondelete}
                Images={this.state.Folders[Fol]}
                name={Fol}
                When={this.FolderDelete}
              />
            );
          })}
        </div>
      </div>
    );
  };
}

export default Gallery;
