---
layout: post
title:  Cool Ruby Graphics
date:   2017-02-13
comments: true
tags: [ Ruby ]
published: false
---
<p>
<img src="/images/snake_ruby_loop.gif">
</p>
<!--more-->

~~~ ruby

# Recreating the second example from here (they're at the bottom) https://learningd3.com/blog/generative-art/
# First one is at https://gist.github.com/JoshCheek/d29901f7872711b1c70faafbc334e336
require 'graphics'

class SnakesBodyAsItEatsMice < Graphics::Simulation
  include Math

  def initialize
    super 600, 350, 24
    @speed      = 0.225
    @num_lines  = 100
    @num_waves  = 3.5
    @h_margin   = 75

    # How many ellipses does the radius pass through? (0.5) would mean their edges touch instead of overlapping
    num_widths = 4

    # Height radius when inflated and deflated
    @e_max_height = h/8.0
    @e_min_height = h/60.0

    # These shouldn't need tweaking, they're for calculating the center and width of the ellipses
    @e_offset    = (w - 2*@h_margin)/(@num_lines+2.0*num_widths-1)
    @e_width_rad = num_widths*@e_offset-1
  end

  def draw(time)
    clear :black
    @num_lines.times do |j|
      e_height_radius = (
        sin(sin(sin(sin(                   # nested sine waves make the output more round
          (j-time*@speed) /                # not sure why I subtract here, seems like I should add, but then the wave moves left
            @num_lines *                   # j/num_lines is a percentage along the wave
            2*PI *                         # now a percentage along a circle. Passed into sine, this gives one wave: -*`*-._.-
            @num_waves                     # multiply the input so that it traverses more circles (more waves)
        )))) /
          sin(sin(sin(1))) +               # each nested sine decreases the amplitude (b/c needs input of -π..π to include full range, but output of sine is -1..1)
                                           # so we divide by nested sines of 1 (the max output value) to scale the final wave back to -1..1
          1                                # scale it from -1..1 to 0..2
      ) /
        2 *                                # scale 0..2 to 0..1
        (@e_max_height - @e_min_height) +  # scale 0..1 to 0..height_diff
        @e_min_height                      # translate 0..height_diff to min_height..max_height

      draw_segment @h_margin+@e_width_rad+j*@e_offset, h/2,
                   @e_width_rad, e_height_radius,
                   :white, :black
    end
  end

  def draw_segment(x, y, w, h, border_color, fill_color)
    ellipse x, y, w-1, h-1, fill_color,   true
    ellipse x, y, w,   h,   border_color, false
  end
end

SnakesBodyAsItEatsMice.new.run

~~~


## Out-Takes


<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Can&#39;t remember who tweeted this, but I recreated it <a href="https://t.co/Q9vXNU1OCk">https://t.co/Q9vXNU1OCk</a> <a href="https://t.co/f3wAl6R3gp">pic.twitter.com/f3wAl6R3gp</a></p>&mdash; Josh Cheek (@josh_cheek) <a href="https://twitter.com/josh_cheek/status/830164612855246848">February 10, 2017</a></blockquote>


<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

