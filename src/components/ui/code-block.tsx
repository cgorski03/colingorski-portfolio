export default function CodeBlock() {
  return (
    <div className="w-full h-full bg-[#282c34] p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27ca3f]"></div>
        </div>
        <span className="text-xs text-[#abb2bf] ml-2">stripe-checkout.ts</span>
      </div>
      
      {/* Code */}
      <div className="flex-1 font-mono text-sm leading-relaxed">
        <div className="text-[#abb2bf] mb-2">
          <span className="text-[#c678dd]">export const</span> <span className="text-[#e06c75]">handler</span> = <span className="text-[#c678dd]">async</span> (<span className="text-[#e06c75]">event</span>: <span className="text-[#e06c75]">APIGatewayProxyEvent</span>) =&gt; {'{'}
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#c678dd]">const</span> {'{'} <span className="text-[#e06c75]">userId</span> {'}'} = <span className="text-[#61afef]">JSON.parse</span>(<span className="text-[#e06c75]">event</span>.<span className="text-[#e06c75]">body</span>!);
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#5c6370]">// Create Stripe customer</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">customer</span> = <span className="text-[#c678dd]">await</span> <span className="text-[#e06c75]">stripe</span>.<span className="text-[#e06c75]">customers</span>.<span className="text-[#e06c75]">create</span>({'{'}
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">email</span>: <span className="text-[#e06c75]">user</span>.<span className="text-[#e06c75]">email</span>,
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">metadata</span>: {'{'} <span className="text-[#98c379]">cognitoUserId</span>: <span className="text-[#e06c75]">userId</span> {'}'}
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          {'}'});
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#5c6370]">// Create checkout session</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#c678dd]">const</span> <span className="text-[#e06c75]">session</span> = <span className="text-[#c678dd]">await</span> <span className="text-[#e06c75]">stripe</span>.<span className="text-[#e06c75]">checkout</span>.<span className="text-[#e06c75]">sessions</span>.<span className="text-[#e06c75]">create</span>({'{'}
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">customer</span>: <span className="text-[#e06c75]">customer</span>.<span className="text-[#e06c75]">id</span>,
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">mode</span>: <span className="text-[#d19a66]">'subscription'</span>,
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">success_url</span>: <span className="text-[#d19a66]">`$&#123;APP_URL&#125;/success`</span>
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          {'}'});
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          <span className="text-[#c678dd]">return</span> {'{'}
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">statusCode</span>: <span className="text-[#d19a66]">200</span>,
        </div>
        <div className="text-[#abb2bf] ml-8 mb-1">
          <span className="text-[#98c379]">body</span>: <span className="text-[#61afef]">JSON.stringify</span>({'{'} <span className="text-[#98c379]">sessionId</span>: <span className="text-[#e06c75]">session</span>.<span className="text-[#e06c75]">id</span> {'}'})
        </div>
        <div className="text-[#abb2bf] ml-4 mb-1">
          {'}'};
        </div>
        <div className="text-[#abb2bf]">
          {'}'};
        </div>
      </div>
    </div>
  )
}