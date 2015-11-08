---
layout: post
title: "Recursion and Memoization"
date: 2014-04-12 10:48
comments: true
categories: [ Education, Ruby ]
---
>To iterate is human, to recurse divine.
>&nbsp;<br/>
>~ L. Peter Deutsch

Recursion is available in many high-level languages, including Ruby. Recursive solutions can be joyfully elegant. At the same time, the pursuit of elegance can lead to unexpected performance pitfalls.

Fortunately, we can use optimization techniques to address performance problems before they occur. Memoization is one technique in our arsenal.

<!--more-->

###Before Memoization
Memoization was designed to solve a particular kind of problem. Consider a method called `fibo(n)` that calculates the _nth_ number of the [Fibonacci](http://en.wikipedia.org/wiki/Fibonacci_number) sequence.

```ruby
# Calculate the nth Fibonacci number, f(n).
def fibo (n)
  if n <= 1
    return n
  else
    value = fibo(n-1) + fibo(n-2)
    return value
  end
end

# Display the Fibonacci sequence.
(1..40).each do |number|
  puts "fibo(#{number}) = #{fibo(number)}"
end
```

The example runs, but performance slows down as _n_ gets larger. Why? Because this method re-calculates all preceeding Fibonacci numbers every time it calculates a new `fibo(n)`. When we calculate Fibonacci numbers manually, we know better. Humans are smart enough to refer to earlier work. But the `fibo(n)` method does not manage time very well.

Is it possible for the `fibo(n)` method to remember the results of earlier calculations so that it can avoid doing work that is already done? Yes, through [memoization](http://en.wikipedia.org/wiki/Memoization).

###Memoization
Memoization means recording the results of earlier calculations so that we don't have to repeat the calculations later. If our code depends on the results of earlier calculations, and if the same calculations are performed over-and-over again, then it makes sense to store interim results (jot results down on a 'memo' = memoization) so that we can avoid repeating the math. 

The Fibonacci example can be improved through memoization as follows.

* Create a place to store temporary results.
* Before performing a calculation, find out if the calculation has
already been done. If so, use the stored result.
* If this is our first time calculating a particular `fibo(n)`, store
the results for future use.

Here's how memoization is implemented in the Fibonacci example:

```ruby
# Fibonacci numbers WITH memoization.

# Initialize the memoization array.
@scratchpad = []
@max_fibo_size = 50
(1..@max_fibo_size).each do |i|
  @scratchpad[i] = :notcalculated
end

# Calculate the nth Fibonacci number, f(n).
def fibo (n)
  if n > @max_fibo_size
    return "n must be #{@max_fibo_size} or less."
  elsif n <= 1
    return n
  elsif @scratchpad[n] != :notcalculated
    return @scratchpad[n]
  else
    @scratchpad[n] = fibo(n-1) + fibo(n-2)
    return @scratchpad[n]
  end
end

# Display the Fibonacci sequence.
(1..50).each do |number|
  puts "fibo(#{number}) = #{fibo(number)}"
end
```

Walking through the code... First we create a memoization array, a place to store the pre-calculated values. In this example, `@scratchpad[]` serves as our memoization array.

The `fibo(n)` method is similar to the one in the earlier example, with a few subtle differences. First, we need to determine whether we've already calculated a particular value. Since we initialized all elements of the `@scratchpad` array with the `:notcalculated` symbol, it's easy to figure out where work needs to be done. If a Fibonacci number `fibo(n)` has already been calculated, we return the value stored at `@scratchpad[n]`. Otherwise, we calculate the new `fibo(n)` and store that value at `@scratchpad[n]` for later use.

###Performance Comparison
The performance of the two programs is compared in this 1-minute video.

<center><iframe src="//player.vimeo.com/video/91841948" width="500" height="313" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></center>

As the video shows, memoization is a performance booster.

###Sample Code
Sample code related to this article can be found on [GitHub](https://github.com/RayHightower/fibonacci).

