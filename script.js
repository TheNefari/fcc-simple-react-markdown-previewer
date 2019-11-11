class MARKDOWNPREVIEWER extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: "",
      previewText: "" };

    this.changeHandler = this.changeHandler.bind(this);
    this.refresh = this.refresh.bind(this);
    this.getMarked = this.getMarked.bind(this);
  }
  changeHandler(event) {
    let string = event.target.value;
    this.refresh(string);
  }
  refresh(string) {
    this.setState({
      editorText: string,
      previewText: this.getMarked(string) });

  }
  getMarked(string) {
    return marked(string, { breaks: true });
  }
  componentDidUpdate() {
    document.getElementById("preview").innerHTML = this.state.previewText;
  }
  componentDidMount() {
    this.refresh(`# header H1
## sub header H2
a [link](freecodecamp.org),
\`inline code,\`
\`\`\`
a code block,
\`\`\`
1. a
1. list
1. item,

> a blockquote,

an image:
![React Logo w/ Text](https://goo.gl/Umyytc)
and **bolded** text.`);
  }
  render() {
    return (
      React.createElement("div", { id: "wrapper" },
      React.createElement("h1", null, "Simple Markdown Editor"),
      React.createElement("div", { id: "editor-window" },
      React.createElement("span", { id: "editor-title" }, "Editor"),
      React.createElement("textarea", {
        id: "editor",
        onChange: this.changeHandler,
        value: this.state.editorText })),


      React.createElement("div", { id: "preview-window" },
      React.createElement("span", { id: "preview-title" }, "Preview"),
      React.createElement("div", { id: "preview" })),

      React.createElement("div", { id: "creator" }, "by Robert M\xFCller")));


  }}

ReactDOM.render(React.createElement(MARKDOWNPREVIEWER, null), document.getElementById("App"));