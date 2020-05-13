import React from "react";

class Album extends React.PureComponent {
  state = {
    color: "white",
  };

  onClick = (e) => {
    e.stopPropagation();
    this.props.onStarClick();
    this.setState({ color: this.state.color === "white" ? "black" : "white" });
  };

  render() {
    return (
      <div className="col s3">
        <div
          onClick={this.props.onExpand}
          className="card hoverable"
          style={{ cursor: "pointer", height: 375, borderRadius: 15 }}
        >
          <div className="card-image">
            <img
              src={this.props.imageUrl}
              alt={this.props.name}
              style={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
            />
            <a
              onClick={(e) => this.onClick(e)}
              className="btn-floating halfway-fab waves-effect waves-dark yellow darken-1"
            >
              <i className={this.state.color + "-text material-icons"}>star</i>
            </a>
          </div>
          <div className="card-content center">
            <span>
              <b>{this.props.name}</b>
              <br />
              {this.props.artist}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Album;
