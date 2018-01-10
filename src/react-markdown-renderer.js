import React from 'react';
import Markdown from 'react-markdown';
import CodeBlock from './code-block';
import './react-markdown-renderer.less'

class ReactMarkdownRenderer extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="result-pane">
          <Markdown
            className="result"
            source={this.props.text}
            renderers={{code: CodeBlock}}
          />
        </div>
    )
  }
}

export default ReactMarkdownRenderer;
