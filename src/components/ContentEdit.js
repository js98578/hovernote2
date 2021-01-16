import React from 'react';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import { BLOCK_TYPES, INLINE_STYLES } from '../lib/draftjs';

export const ContentEdit = props => {
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty());

  const editor = React.useRef(null);
  const focusEditor = () => {
    editor.current.focus();
  };

  const onChange = changedEditorState => setEditorState(changedEditorState);

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = e => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4 /* maxDepth */);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = blockType => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = inlineStyle => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  let className = 'RichEditor-editor';
  var contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (
      contentState
        .getBlockMap()
        .first()
        .getType() !== 'unstyled'
    ) {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className="RichEditor-root">
      <BlockStyleControls editorState={editorState} onToggle={this.toggleBlockType} />
      <InlineStyleControls editorState={editorState} onToggle={this.toggleInlineStyle} />
      <div className={className} onClick={this.focus}>
        <Editor
          blockStyleFn={getBlockStyle}
          customStyleMap={styleMap}
          editorState={editorState}
          handleKeyCommand={this.handleKeyCommand}
          keyBindingFn={this.mapKeyToEditorCommand}
          onChange={this.onChange}
          placeholder="Tell a story..."
          ref="editor"
          spellCheck={true}
        />
      </div>
    </div>
  );
};

const BlockStyleControls = props => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const InlineStyleControls = props => {
  const currentStyle = props.editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const StyleButton = props => {
  const onToggle = e => {
    e.preventDefault();
    props.onToggle(props.style);
  };

  return (
    <span style={props.active ? styles.activeButton : styles.styleButton} onMouseDown={onToggle}>
      {props.label}
    </span>
  );
};

const getBlockStyle = (block) => {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

const styles = {
  root: {
    background: '#fff',
    border: '1px solid #ddd',
    fontFamily: 'Georgia, serif',
    fontSize: 14,
    padding: 15
  },
  editor: {
    borderTop: '1px solid #ddd',
    cursor: 'text',
    fontSize: 16,
    marginTop: 10
  },
  blockquote: {
    borderLeft: '5px solid #eee',
    color: '#666',
    fontFamily: 'Hoefler Text, Georgia, serif',
    fontStyle: 'italic',
    margin: '16px 0',
    padding: '10px 20px'
  },
  controls: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: 14,
    marginBottom: 5,
    userSelect: 'none'
  },
  styleButton: {
    color: '#999',
    cursor: 'pointer',
    marginRight: 16,
    padding: '2px 0',
    display: 'inline-block'
  },
  activeButton: {
    color: '#5890ff'
  }
};
