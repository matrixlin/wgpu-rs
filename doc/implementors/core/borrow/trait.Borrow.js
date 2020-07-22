(function() {var implementors = {};
implementors["arrayvec"] = [{"text":"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayString.html\" title=\"struct arrayvec::ArrayString\">ArrayString</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["arrayvec::array_string::ArrayString"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>&lt;A as <a class=\"trait\" href=\"arrayvec/trait.Array.html\" title=\"trait arrayvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"arrayvec/trait.Array.html#associatedtype.Item\" title=\"type arrayvec::Array::Item\">Item</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"arrayvec/struct.ArrayVec.html\" title=\"struct arrayvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["arrayvec::ArrayVec"]}];
implementors["smallvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;[&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"type\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>]&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;","synthetic":false,"types":["smallvec::SmallVec"]}];
implementors["wgpu_core"] = [{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"gfx_hal/trait.Backend.html\" title=\"trait gfx_hal::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"wgpu_core/binding_model/struct.BindGroup.html\" title=\"struct wgpu_core::binding_model::BindGroup\">BindGroup</a>&lt;B&gt;","synthetic":false,"types":["wgpu_core::binding_model::BindGroup"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"gfx_hal/trait.Backend.html\" title=\"trait gfx_hal::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.Buffer.html\" title=\"struct wgpu_core::resource::Buffer\">Buffer</a>&lt;B&gt;","synthetic":false,"types":["wgpu_core::resource::Buffer"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"gfx_hal/trait.Backend.html\" title=\"trait gfx_hal::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"struct\" href=\"gfx_hal/image/struct.SubresourceRange.html\" title=\"struct gfx_hal::image::SubresourceRange\">SubresourceRange</a>&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.Texture.html\" title=\"struct wgpu_core::resource::Texture\">Texture</a>&lt;B&gt;","synthetic":false,"types":["wgpu_core::resource::Texture"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"gfx_hal/trait.Backend.html\" title=\"trait gfx_hal::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.TextureView.html\" title=\"struct wgpu_core::resource::TextureView\">TextureView</a>&lt;B&gt;","synthetic":false,"types":["wgpu_core::resource::TextureView"]},{"text":"impl&lt;B:&nbsp;<a class=\"trait\" href=\"gfx_hal/trait.Backend.html\" title=\"trait gfx_hal::Backend\">Backend</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html\" title=\"trait core::borrow::Borrow\">Borrow</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>&gt; for <a class=\"struct\" href=\"wgpu_core/resource/struct.Sampler.html\" title=\"struct wgpu_core::resource::Sampler\">Sampler</a>&lt;B&gt;","synthetic":false,"types":["wgpu_core::resource::Sampler"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()