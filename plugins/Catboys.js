function g(e,s,u,o){window.enmity.clyde.sendReply(e,s,u,o)}var d;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(d||(d={}));var c;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(c||(c={}));var h;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(h||(h={}));var w;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(w||(w={}));var l;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number"})(l||(l={}));var m;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(m||(m={}));const F="enmity";function B(e){window.enmity.plugins.registerPlugin(e)}const t=window.enmity.react;t.React,t.memo,t.useCallback,t.useContext,t.useEffect,t.useImperativeHandle,t.useMemo,t.useReducer,t.useRef,t.useState,t.Alert,t.Button,t.FlatList;const I=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl,t.ScrollView,t.SectionList,t.StatusBar,t.StyleSheet,t.Switch,t.Text,t.TextInput,t.TouchableHighlight,t.TouchableOpacity,t.TouchableWithoutFeedback,t.Touchable,t.View,t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio,t.FormRow,t.FormSection,t.FormSelect,t.FormSubLabel,t.FormSwitch,t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;async function v(e){return new Promise((s,u)=>{window.enmity.rest.get(e).then(o=>{s(o)}).catch(o=>{u(o)})})}const x=["img","baka"];async function R(e){return new Promise((s,u)=>{I.getSize(e,(o,i)=>{s({width:o,height:i})},o=>{u(o)})})}const k={name:"Catboys",commands:[],onStart(){const e={id:"catboys-command",applicationId:F,name:"catboys",displayName:"catboys",description:"Sends an image from the catboys.com API.",displayDescription:"Sends an image from the catboys.com API.",type:c.Chat,inputType:h.BuiltInText,options:[{name:"type",displayName:"type",description:"Image type",displayDescription:"Image type",type:l.String,required:!0,choices:x.map(s=>({name:s,displayName:s,value:s}))},{name:"whisper",displayName:"whisper",description:"Whisper the URL instead of sending it to chat",displayDescription:"Whisper the URL instead of sending it to chat",type:l.Boolean,required:!1}],execute:async function(s,u){var o,i;const n=s[0].value,f=(i=(o=s[1])==null?void 0:o.value)!=null?i:!0,r=await v(`https://api.catboys.com/${n}`);if(r.ok&&r.body.error==="none")if(f){const{width:a,height:S}=await R(r.body.url);let b={type:"rich",title:n==="img"?"random image":`random ${n} image`,image:{proxy_url:`https://external-content.duckduckgo.com/iu/?u=${r.body.url}`,url:r.body.url,width:a,height:S},footer:{text:"catboys.com"},color:"0x45f5f5"};n==="img"&&r.body.artist!=="unknown"&&Object.assign(b,{fields:[{inline:!0,name:"Artist",value:`[${r.body.artist}](${r.body.artist_url})`}]});const y={type:1,components:[{type:2,style:5,label:"View image",url:r.body.url}]};g(u.channel.id,{embeds:[b],components:[y]},"catboys.com","https://github.com/Catboys-Dev.png")}else{let a;return n==="img"&&r.body.artist!=="unknown"?a=[`Artist: <${r.body.artist}> (<${r.body.artist_url}>)`,`Sauce: <${r.body.source_url}>`,r.body.url].join(`
`):a=r.body.url,{content:a}}else{const a=u.channel;g(a.id,`An error happened making a request to https://api.catboys.com/${n}`)}}};this.commands.push(e)},onStop(){this.commands=[]}};B(k);
