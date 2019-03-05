import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MonacoEditorModule, NgxMonacoEditorConfig} from 'ngx-monaco-editor';


//Commented Code  :)
const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    monaco.languages.register({id: 'mySpecialLanguage'});
    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('mySpecialLanguage', {
      tokenizer: {
        root:
      [
          // @ annotations.
          // As an example, we emit a debugging log message on these tokens.
          // Note: message are supressed during the first load -- change some lines to see them.
          [/@\s*[a-zA-Z_\$][\w\$]*/, { token: 'annotation', log: 'annotation token: $0' }],

          // identifiers and keywords
          [/[a-z_$][\w$]*/, { cases: {
            '@default': 'identifier' } }],
        [/[A-Z][\w\$]*/, 'type.identifier' ],  // to show class names nicely
          // numbers
          [/\d*\.\d+([eE][\-+]?\d+)?/, 'number.float'],
          [/0[xX][0-9a-fA-F]+/, 'number.hex'],
          [/\d+/, 'number'],

          // delimiter: after number because of .\d floats
          [/[;,.]/, 'delimiter'],

       ],
          comment: [
          [/[^\/*]+/, 'comment' ],
          [/\/\*/,    'comment', '@push' ],    // nested comment
          [/[\/*]/,   'comment' ]
        ],
        whitespace: [
          [/[ \t\r\n]+/, 'white'],
          [/\/\*/,       'comment', '@comment' ],
          [/\/\/.*$/,    'comment'],
        ]
         }
    });

// Register a completion item provider for the new language
    monaco.languages.registerCompletionItemProvider('mySpecialLanguage', {
      provideCompletionItems: () => {
        var suggestions = [{
          label: 'simpleText',
          kind: monaco.languages.CompletionItemKind.Text,
          insertText: 'simpleText'
        },
          {
            label: 'Rule',
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'Rule().'
          },
          {
            label: 'mustBe',
            kind: monaco.languages.CompletionItemKind.Text,
            insertText: 'mustBe.'
          },
          {
            label: 'field',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'field("${1:Condition}").',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          },
          {
            label: 'NotEqual',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'NotEqual("${1:Value}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Not Equal the value defined , do not be empty'
          },
          {
            label: 'Equal',
            kind: monaco.languages.CompletionItemKind.Keyword,
            insertText: 'Equal("${1:Value}")',
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            documentation: 'Equal the value defined , do not be empty'
          },
          {
          label: 'testing',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'testing(${1:condition})',
         insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
         documentation: 'testing with one condition'
        }, {
          label: 'ifelse',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: [
            'if (${1:condition}) {',
            '\t$0',
            '} else {',
            '\t',
            '}'
          ].join('\n'),
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'If-Else Statement'
        }];
        return {suggestions: suggestions};
      }
    });

 }}

@NgModule({
  imports: [
    CommonModule,
    MonacoEditorModule.forRoot(monacoConfig)

  ],
  declarations: [],
  exports: [MonacoEditorModule]
})
export class ConfEditor { }
