import React from "react";
import ImageCard from "../imagecards/image.js";
import "./style.css";
import Modal from "react-awesome-modal";
import GalleryFolder from "../Galley-Folders/folder.js";
// include styles

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.rememberMe = JSON.parse(localStorage.getItem("IMGS"));
    if (this.rememberMe) {
      this.state = {
        images: this.rememberMe,
        currentAddress: "",
        visible: false,
        Folders: [],
      };
    } else {
      this.state = {
        images: [],
        currentAddress: "",
        visible: false,
        Folders: [],
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
  onaddFolder = (event) => {
    const FolderName = document.getElementById("input-folder").value;
    const f = [...this.state.Folders];
    console.log(FolderName);
    f.push(FolderName);
    this.setState({
      Folders: f,
    });
    localStorage.setItem("Folders", JSON.stringify(f));
    this.closeModal();
    document.getElementById("input-folder").value = "";
  };

  onaddressChange = (event) => {
    this.setState({
      currentAddress: event.target.value,
    });
  };

  onaddimage = (event) => {
    const n = [...this.state.images];
    if (!this.state.currentAddress) {
      alert("Please Enter Url");
      return;
    }
    n.push(this.state.currentAddress);
    localStorage.setItem("IMGS", JSON.stringify(n));
    this.setState({
      images: n,
      currentAddress: "",
    });
  };
  Ondelete = (ide) => {
    let vt = [...this.state.images];
    console.log(ide);
    vt.splice(ide, 1);
    this.setState({
      images: vt,
    });

    localStorage.setItem("IMGS", JSON.stringify(vt));
  };

  render = () => {
    return (
      <div className="root-container">
        <p className="title">......Image Gallery......</p>
        <div className="input-box">
          <input
            onChange={this.onaddressChange}
            value={this.state.currentAddress}
            type="text"
            placeholder="Enter Image Url"
          ></input>
          <button onClick={this.onaddimage} className="add-btn">
            Add
          </button>
          <button onClick={() => this.openModal()} className="add-btn-2">
            Create New Folder
          </button>

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
              ></input>
              <button onClick={this.onaddFolder} className="add-btn">
                Add Folder
              </button>
            </div>
          </Modal>
        </div>
        <div className="cards">
          {this.state.Folders.map((Fol) => {
            return <GalleryFolder name={Fol} />;
          })}
        </div>
        <div className="cards">
          {this.state.images.map((b, index) => {
            return (
              <ImageCard
                key={Math.random() * 100}
                id={index}
                currentAddress={b}
                WhenClicked={this.Ondelete}
              />
            );
          })}
        </div>
      </div>
    );
  };
}

export default Gallery;
