# frozen_string_literal: true

module ReactHelper
  def react_component(name, props: {}, html_class: nil)
    content_tag(
      "div",
      nil,
      class: html_class,
      data: { controller: "react", react_component: name, react_props: react_props(props) }
    )
  end

  def react_props(hash)
    return nil if hash.nil?

    JSON.dump(hash)
  end
end
